type SettingsConfig = {
    readonly theme: {
        values: typeof themes,
        localStoreKey: string,
        default: Theme,
    },
    readonly font: {
        values: typeof fonts,
        localStoreKey: string,
        default: Font,
    }
}

export type WeakTheme = { name: string, cssUrl: string };
export type WeakFont = { name: string, cssClass: string };


const themes = [
    { name: "light", cssUrl: "theme_light.css" },
    { name: "dark", cssUrl: "theme_dark.css" }
] as const;

export type Theme = typeof themes[number];
export type ThemeName = typeof themes[number]['name'];

const fonts = [
    { name: "Helvetica", cssClass: "font-helvetica" },
    { name: "Dislexia", cssClass: "font-dislexia" },
] as const;

export type Font = typeof fonts[number];
export type FontName = typeof fonts[number]['name'];


export const settingsConfig: SettingsConfig = {
    theme: {
        values: themes,
        localStoreKey: 'ui_theme',
        default: { name: "light", cssUrl: "theme_light.css" }
    },
    font: {
        values: fonts,
        localStoreKey: "ui_font",
        default: { name: "Helvetica", cssClass: "font-helvetica" }
    }

} as const;



