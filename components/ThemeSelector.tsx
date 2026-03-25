'use client';
import React, { useState } from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { themes, generateThemeFromHex } from '@/lib/themes';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export default function ThemeSelector() {
  const { currentTheme, setTheme, isThemeSelectorOpen, setIsThemeSelectorOpen } = useTheme();
  const [selectedColor, setSelectedColor] = useState(currentTheme.primary);
  const [customColor, setCustomColor] = useState(currentTheme.primary);

  const handleColorChange = (color: string) => {
    setCustomColor(color);
    setSelectedColor(color);
    // Generate and apply theme preview
    const customTheme = generateThemeFromHex(color, "Custom");
    applyThemePreview(customTheme);
  };

  const handleSuggestedColorClick = (theme: typeof themes[0]) => {
    setSelectedColor(theme.primary);
    setCustomColor(theme.primary);
    applyThemePreview(theme);
  };

  const applyThemePreview = (theme: typeof themes[0]) => {
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-dark', theme.primaryDark);
    root.style.setProperty('--primary-light', theme.primaryLight);

    // Convert hex to RGB
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };

    const primaryRgb = hexToRgb(theme.primary);
    if (primaryRgb) {
      root.style.setProperty('--primary-rgb', `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`);
    }
  };

  const handleSubmit = () => {
    // Find if it's a predefined theme or create a custom one
    const existingTheme = themes.find(t => t.primary.toLowerCase() === selectedColor.toLowerCase());
    const finalTheme = existingTheme || generateThemeFromHex(selectedColor, "Custom");

    setTheme(finalTheme);
    setIsThemeSelectorOpen(false);

    // Remove theme param from URL
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('theme');
      window.history.replaceState({}, '', url.toString());
    }
  };

  const handleClose = () => {
    setIsThemeSelectorOpen(false);
    // Reset to current theme
    applyThemePreview(currentTheme);
    setSelectedColor(currentTheme.primary);
    setCustomColor(currentTheme.primary);

    // Remove theme param from URL
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('theme');
      window.history.replaceState({}, '', url.toString());
    }
  };

  return (
    <Dialog open={isThemeSelectorOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Customize Your Theme</DialogTitle>
          <DialogDescription>
            Choose from suggested colors or pick your own custom color
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Color Input */}
          <div className="space-y-2">
            <label htmlFor="color-picker" className="text-sm font-medium">
              Select Color
            </label>
            <div className="flex items-center gap-4">
              <input
                id="color-picker"
                type="color"
                value={customColor}
                onChange={(e) => handleColorChange(e.target.value)}
                className="h-12 w-24 rounded border border-gray-300 cursor-pointer"
              />
              <input
                type="text"
                value={customColor.toUpperCase()}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^#[0-9A-F]{0,6}$/i.test(value)) {
                    handleColorChange(value);
                  }
                }}
                placeholder="#6366F1"
                className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:border-primary focus:border-2"
              />
            </div>
          </div>

          {/* Suggested Colors */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Suggested Colors</label>
            <div className="grid grid-cols-5 gap-2">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleSuggestedColorClick(theme)}
                  className={`group relative h-12 rounded-lg transition-all hover:scale-105 ${
                    selectedColor.toLowerCase() === theme.primary.toLowerCase()
                      ? 'ring-2 ring-offset-2 ring-primary'
                      : ''
                  }`}
                  style={{ backgroundColor: theme.primary }}
                  title={theme.name}
                >
                  {selectedColor.toLowerCase() === theme.primary.toLowerCase() && (
                    <svg
                      className="absolute inset-0 m-auto w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                  <span className="sr-only">{theme.name}</span>
                </button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-400">
              {themes.map((theme, index) => (
                <span key={theme.name}>
                  <span
                    className="inline-block w-3 h-3 rounded-full mr-1 align-middle"
                    style={{ backgroundColor: theme.primary }}
                  />
                  {theme.name}
                  {index < themes.length - 1 && <span className="ml-2">•</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Preview */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Preview</label>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg space-y-3">
              <div className="flex items-center justify-between">
                <button
                  className="px-4 py-2 text-white rounded-md text-sm"
                  style={{ backgroundColor: selectedColor }}
                >
                  Primary Button
                </button>
                <span
                  className="font-semibold"
                  style={{ color: selectedColor }}
                >
                  Colored Text
                </span>
              </div>
              <div className="flex gap-2">
                <div
                  className="h-2 flex-1 rounded"
                  style={{ backgroundColor: selectedColor }}
                />
                <div
                  className="h-2 flex-1 rounded opacity-50"
                  style={{ backgroundColor: selectedColor }}
                />
                <div
                  className="h-2 flex-1 rounded opacity-25"
                  style={{ backgroundColor: selectedColor }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={handleClose}
            className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 text-white rounded-lg transition-colors"
            style={{ backgroundColor: selectedColor }}
          >
            Apply Theme
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}