import { DefaultTheme } from "styled-components"

export const defaultTheme: DefaultTheme = {
	palette: {
		common: {
			black: "#18001A",
			white: "#ffffff",
		},
		primary: {
			level90:"#1B0128",
			level60: "#51095C",
			level50: "#CF1CD7",
			level10: "#50315F",
		},
		secondary: {
			level90: "#57023F",
			level50: "#E30473",
		},
		gradient: {
			level70: "linear-gradient(245.87deg, rgba(227, 4, 115, 0.46) 4.38%, #E30473 99.31%)",
			level60: "linear-gradient(245.87deg, rgba(227, 4, 115, 0.46) 4.38%, rgba(227, 4, 115, 0) 99.31%)",
			level50: "linear-gradient(245.87deg, rgba(207, 28, 215, 0.46) 4.38%, rgba(207, 28, 215, 0) 99.31%)",
			level40:"linear-gradient(245.87deg, rgba(207, 28, 215, 0.46) 4.38%, #CF1CD7 99.31%)",
		},
		neutral: {
			level90: "",
			level50: "",
			level10: "",
		},
	},
}