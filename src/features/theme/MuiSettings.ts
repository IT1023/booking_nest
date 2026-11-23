import type {
  PaletteOptions,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    headfoot?: PaletteColor;
    hero?: PaletteColor;
    mainbody?: PaletteColor;
    icons?: PaletteColor;
    textColor?: PaletteColor;
    service?: PaletteColor;
  }
  interface PaletteOptions {
    headfoot?: PaletteColorOptions;
    hero?: PaletteColorOptions;
    mainbody?: PaletteColorOptions;
    icons?: PaletteColorOptions;
    textColor?: PaletteColorOptions;
    service?: PaletteColorOptions;
  }
}

export const lightPalette: PaletteOptions = {
  primary: {
    main: "#166534", // deep forest green, ~7:1 against white
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#0B3B24", // very dark green
    contrastText: "#E8F5EC",
  },
  info: {
    main: "#FFFFFF",
    contrastText: "#10241A",
  },
  divider: "#C5D6CB",
  headfoot: {
    main: "#F1F5F2",
  },
  hero: {
    main: "#D5E3D9",
  },
  mainbody: {
    main: "#FFFFFF",
  },
  icons: {
    main: "#1F3D2B",
  },
  textColor: {
    main: "#0E1F15",
  },
  service: {
    main: "#E7EFE9",
  },
};

export const darkPalette: PaletteOptions = {
  primary: {
    main: "#3FA66B", // muted mid green, readable on dark without glowing
    contrastText: "#04150B",
  },
  secondary: {
    main: "#123524",
    contrastText: "#E3F1E8",
  },
  info: {
    main: "#1B3326",
    contrastText: "#EAF5EE",
  },
  divider: "#2C4A39",
  headfoot: {
    main: "#08130D",
  },
  hero: {
    main: "#0C1C14",
  },
  mainbody: {
    main: "#102319",
  },
  icons: {
    main: "#A9CDB8",
  },
  textColor: {
    main: "#DCEBE1",
  },
  service: {
    main: "#1A3025",
  },
};
