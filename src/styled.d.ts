import "styled-components"

interface IPaletteCommon {
    black: string;
    white: string;
}

interface IPalettePrimaryLevels {
    level90: string;
    level60: string;
    level50: string;
    level10: string;
}
interface IPaletteSecondaryLevels {
    level90: string;
    level50: string;
}
interface IPaletteNeutralLevels {
    level90: string;
    level50: string;
    level10: string;
}
interface IPaletteGradientLevels {
    level70: string;
    level60: string;
    level50: string;
    level40: string;
}

declare module "styled-components" {
    export interface DefaultTheme {
        palette: {
            common: IPaletteCommon,
            primary: IPalettePrimaryLevels,
            secondary: IPaletteSecondaryLevels,
            gradient: IPaletteGradientLevels,
            neutral: IPaletteNeutralLevels,
        };
    }
}
