import styled from "styled-components"
import { thp } from "../../styles/themeHelpers"
import { TextStyled } from "../../styles/typographic"

const Wrapper = styled.section`
	grid-column: 1/3;
	border-top: 1px dashed;
	padding: 16px 0 0;
	color: ${thp.primary(c => c.level10)} ;
	${TextStyled.Body14}{
		text-transform: uppercase;
	}
	gap:16px;
	display: flex;
	flex-flow: column;
`

const CardsContainer = styled.article`
	display: flex;
	width: 100%;
	height: auto;
	gap: 16px;
	overflow-x: auto;
	overflow-y: hidden;
	padding: 5px 176px 5px 5px;
`

const NoHasCards = styled.p`
		color: ${thp.common(c => c.white)} ;
		min-height: 160px;
		font-size: 1.4rem;
`

export const MovementsStyled = {
	Wrapper,
	CardsContainer,
	NoHasCards,
}