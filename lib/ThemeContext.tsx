'use client';
import React, { createContext, useContext, useState } from 'react';
import { useQueryFlag } from './browserStore';

/**
 * Open/close state for the theme selector dialog.
 *
 * This used to also carry a whole second theme system — a `currentTheme`, a
 * `setTheme`, a `selectedTheme` localStorage key and an effect writing
 * --primary / --primary-dark / --primary-light / --primary-rgb onto <html>.
 * All of it was dead: nothing outside this file ever read currentTheme or
 * called setTheme, so the key was never written and the effect only ever took
 * the branch that removed the properties again. --primary survives as a plain
 * CSS alias of --color-accent in tokens.css, which is where it belongs; the
 * live accent system is ThemeSelector's `accentPreset`, applied before paint by
 * lib/themeScript.ts.
 *
 * What is left is the one thing that was actually used: whether the dialog is
 * open. `?theme=true` opens it, and a user override takes precedence once they
 * open or close it themselves — so the URL still works and the close button
 * still works.
 */
interface ThemeContextType {
  isThemeSelectorOpen: boolean;
  setIsThemeSelectorOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const urlWantsSelector = useQueryFlag('theme');

  // null = the user has not opened or closed it yet, so the URL still decides.
  const [openOverride, setOpenOverride] = useState<boolean | null>(null);
  const isThemeSelectorOpen = openOverride ?? urlWantsSelector;

  return (
    <ThemeContext.Provider
      value={{ isThemeSelectorOpen, setIsThemeSelectorOpen: setOpenOverride }}
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
