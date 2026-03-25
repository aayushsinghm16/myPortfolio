'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, themes } from './themes';

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (theme: Theme) => void;
  isThemeSelectorOpen: boolean;
  setIsThemeSelectorOpen: (open: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]); // Default to Indigo
  const [isThemeSelectorOpen, setIsThemeSelectorOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check URL params on mount
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('theme') === 'true') {
        setIsThemeSelectorOpen(true);
      }

      // Load saved theme from localStorage
      const savedTheme = localStorage.getItem('selectedTheme');
      if (savedTheme) {
        const theme = themes.find(t => t.name === savedTheme);
        if (theme) {
          setCurrentTheme(theme);
        }
      }
    }
  }, []);

  useEffect(() => {
    // Apply theme to CSS variables
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      root.style.setProperty('--primary', currentTheme.primary);
      root.style.setProperty('--primary-dark', currentTheme.primaryDark);
      root.style.setProperty('--primary-light', currentTheme.primaryLight);

      // Convert hex to RGB for gradients and opacity variations
      const hexToRgb = (hex: string) => {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        } : null;
      };

      const primaryRgb = hexToRgb(currentTheme.primary);
      if (primaryRgb) {
        root.style.setProperty('--primary-rgb', `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`);
      }
    }
  }, [currentTheme]);

  const setTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    // Store in localStorage for persistence (optional)
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedTheme', theme.name);
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <ThemeContext.Provider value={{ currentTheme: themes[0], setTheme: () => {}, isThemeSelectorOpen: false, setIsThemeSelectorOpen: () => {} }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, isThemeSelectorOpen, setIsThemeSelectorOpen }}>
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