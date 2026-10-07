'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, themes } from './themes';
import { useLocalValue, useQueryFlag, writeLocal } from './browserStore';

const STORAGE_KEY = 'selectedTheme';

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  isThemeSelectorOpen: boolean;
  setIsThemeSelectorOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme provider, backed by useSyncExternalStore rather than a mount effect.
 *
 * What changed and why:
 *
 * - localStorage is now the single source of truth for the chosen theme, read
 *   through useLocalValue. Previously the saved name was copied into React
 *   state on mount, which meant two sources that could disagree and an extra
 *   render pass on every page load. setTheme now writes to the store and the
 *   subscription re-renders — one direction, no copy.
 *
 * - The `mounted` flag is gone. It existed to avoid a hydration mismatch, which
 *   useSyncExternalStore handles properly via getServerSnapshot: the server and
 *   the hydration pass both see null, then the client swaps in the real value.
 *   The old version rendered a throwaway provider with a no-op setTheme on the
 *   first pass, so a click landing in that window did nothing.
 *
 * - `?theme=true` is read the same way. It is combined with an override so the
 *   dialog can still be closed: the user's choice wins once they make one,
 *   otherwise the URL decides.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const savedThemeName = useLocalValue(STORAGE_KEY);
  const urlWantsSelector = useQueryFlag('theme');

  // null = the user has not opened or closed it yet, so the URL still decides.
  const [openOverride, setOpenOverride] = useState<boolean | null>(null);
  const isThemeSelectorOpen = openOverride ?? urlWantsSelector;

  const currentTheme =
    (savedThemeName ? themes.find(t => t.name === savedThemeName) : undefined) ?? themes[0];

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;

    // No explicit choice -> let app/tokens.css own the accent. Writing here
    // unconditionally is what made the header render in the previous theme's
    // colour after the token system landed.
    if (!savedThemeName) {
      root.style.removeProperty('--primary');
      root.style.removeProperty('--primary-dark');
      root.style.removeProperty('--primary-light');
      root.style.removeProperty('--primary-rgb');
      return;
    }

    root.style.setProperty('--primary', currentTheme.primary);
    root.style.setProperty('--primary-dark', currentTheme.primaryDark);
    root.style.setProperty('--primary-light', currentTheme.primaryLight);

    // Convert hex to RGB for gradients and opacity variations
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) }
        : null;
    };

    const primaryRgb = hexToRgb(currentTheme.primary);
    if (primaryRgb) {
      root.style.setProperty('--primary-rgb', `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`);
    }
  }, [currentTheme, savedThemeName]);

  const setTheme = (theme: Theme) => writeLocal(STORAGE_KEY, theme.name);

  return (
    <ThemeContext.Provider
      value={{ currentTheme, setTheme, isThemeSelectorOpen, setIsThemeSelectorOpen: setOpenOverride }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
