import { createGlobalStyle, css } from "styled-components"
import { thp } from "./themeHelpers"
import { fonts } from "./typographic"

export const GlobalStyled = createGlobalStyle<{ debug?: boolean }>`
	/* width */
	::-webkit-scrollbar {
	width: 6px;
	height: 6px;
	}

	/* Track */
	::-webkit-scrollbar-track {
	background: rgba(0,0,0,.4);
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		border-radius: 290px;
		background: ${thp.primary(c => c.level60)};
	}

	*,
	*::after,
	*::before{
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		-webkit-tap-highlight-color: transparent;
		${p => p.debug && css`
			outline: 1px solid gray;
		`}
	}
	figure{
		margin: 0;
	}
	html {
		box-sizing: border-box;
		-webkit-text-size-adjust: 100%;
		font-size: 62.5%;
		line-height: 1.15;
		min-height:100%;
		scroll-behavior: smooth;
		position:relative;
	}
	html:focus-within {
		scroll-behavior: smooth;
	}
	body {
		text-rendering: optimizeSpeed;
		font-family: ${fonts.primary};
		font-weight:600;
		line-height: 1.1;
		min-height:100%;
		position:relative;
		scroll-behavior: smooth;
		overflow-x: hidden !important;
		background-color: ${thp.common(c => c.black)};
		color: ${thp.common(c => c.white)};
	}
`