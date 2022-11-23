import styled, { css } from "styled-components";
import {
	TextWeight,
	TextAlign,
	getFontWeight,
} from "./typographicHelper";

export const fonts = {
	primary: "'IBM Plex Mono', monospace"
}

type CommonProps = {
	textWeight?: TextWeight;
	textAlign?: TextAlign;
	isCursorPointer?:boolean,
}

const TextStyleBase = () => css<CommonProps>`
	${p => (p.textWeight && getFontWeight(p.textWeight))};
	${p => (p.textAlign && css`text-align: ${p.textAlign};`)};
	${p => (p.isCursorPointer && css`
		cursor: pointer;
	`)}
`

const Heading18 = styled.h2`
	${TextStyleBase}
	font-size:1.8rem;
`
const Body14 = styled.p`
	${TextStyleBase}
	font-size:1.4rem;
`

export const TextStyled = {
	Heading18,
	Body14
}