export interface Theme {
  name: string;
  primary: string;
  primaryDark: string;
  primaryLight: string;
  description: string;
}

export const themes: Theme[] = [
  {
    name: "Architect Blue",
    primary: "#003fab",
    primaryDark: "#002d7a",
    primaryLight: "#0455dd",
    description: "Stitch design system (Default)"
  },
  {
    name: "Indigo",
    primary: "#6366f1",
    primaryDark: "#4f46e5",
    primaryLight: "#818cf8",
    description: "Professional and elegant"
  },
  {
    name: "Blue",
    primary: "#3b82f6",
    primaryDark: "#1d4ed8",
    primaryLight: "#60a5fa",
    description: "Classic and trustworthy"
  },
  {
    name: "Purple",
    primary: "#8b5cf6",
    primaryDark: "#6d28d9",
    primaryLight: "#a78bfa",
    description: "Creative and modern"
  },
  {
    name: "Emerald",
    primary: "#10b981",
    primaryDark: "#059669",
    primaryLight: "#34d399",
    description: "Professional and fresh"
  },
  {
    name: "Teal",
    primary: "#14b8a6",
    primaryDark: "#0d9488",
    primaryLight: "#2dd4bf",
    description: "Balanced and calming"
  },
  {
    name: "Cyan",
    primary: "#06b6d4",
    primaryDark: "#0891b2",
    primaryLight: "#22d3ee",
    description: "Cool and technical"
  },
  {
    name: "Rose",
    primary: "#f43f5e",
    primaryDark: "#e11d48",
    primaryLight: "#fb7185",
    description: "Bold and energetic"
  },
  {
    name: "Pink",
    primary: "#ec4899",
    primaryDark: "#db2777",
    primaryLight: "#f472b6",
    description: "Playful and modern"
  },
  {
    name: "Orange",
    primary: "#f97316",
    primaryDark: "#ea580c",
    primaryLight: "#fb923c",
    description: "Warm and friendly"
  },
  {
    name: "Amber",
    primary: "#f59e0b",
    primaryDark: "#d97706",
    primaryLight: "#fbbf24",
    description: "Bright and optimistic"
  }
];

// Function to generate light and dark shades from a hex color
export function generateThemeFromHex(hex: string, name: string = "Custom"): Theme {
  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
  };

  // Convert RGB to hex
  const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  // Darken color
  const darken = (hex: string, percent: number) => {
    const rgb = hexToRgb(hex);
    const factor = 1 - percent / 100;
    return rgbToHex(
      Math.round(rgb.r * factor),
      Math.round(rgb.g * factor),
      Math.round(rgb.b * factor)
    );
  };

  // Lighten color
  const lighten = (hex: string, percent: number) => {
    const rgb = hexToRgb(hex);
    const factor = percent / 100;
    return rgbToHex(
      Math.round(rgb.r + (255 - rgb.r) * factor),
      Math.round(rgb.g + (255 - rgb.g) * factor),
      Math.round(rgb.b + (255 - rgb.b) * factor)
    );
  };

  return {
    name,
    primary: hex,
    primaryDark: darken(hex, 20),
    primaryLight: lighten(hex, 20),
    description: "Custom color theme"
  };
}