import styled, { css, keyframes } from "styled-components"
import { thp } from "../../styles/themeHelpers"

type Props = {
	isFirstPlayer?: boolean,
}

const ShowCardAnimation = keyframes`
	from{
		translate:0 5px;
		opacity: 0;
	}
	to{
		translate:0 0;
		opacity: 1;
	}
`

const Player1Styles = css`
	box-shadow: 0px 0px 5px rgba(207, 28, 215, 0.8);
	background: ${thp.gradient(c => c.level50)};
	svg{
		filter: drop-shadow(0 0 10px ${thp.primary(c => c.level50)});
	}
	&:hover{
		background: ${thp.gradient(c => c.level40)};
	}
`
const Player2Styles = css`
	box-shadow: 0px 0px 5px rgba(227, 4, 115, 0.8);
	background: ${thp.gradient(c => c.level60)};
	svg{
		filter: drop-shadow(0 0 10px ${thp.secondary(c => c.level50)});
	}
	&:hover{
		background: ${thp.gradient(c => c.level70)};
	}
`

const Wrapper = styled.section<Props>`
	width: 160px;
	min-width: 160px;
	height: 160px;
	border-radius: 16px;
	border-top-width: 2px;
	border-top-style: solid;
	border-top-color: rgba(255,255,255,.3);
	padding: 16px 16px 40px;
	color: ${thp.common(c => c.white)};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	transition: all .3s ease-out;
	animation: ${ShowCardAnimation} .4s cubic-bezier(0.85, 0, 0.15, 1) forwards;
	${p => (p.isFirstPlayer ? Player1Styles : Player2Styles)}
	&:hover{
		transform: translateY(-5px);
	}
`

const NumberIconContainer = styled.article`
	display: grid;
	grid-template-columns: 1fr 16px;
	gap: 12px;
	align-items: center;
	svg{
		width: 100%;
	}
`

const CoordItem = styled.span`
	display: flex;
	padding: 9px;
	justify-content: center;
	align-items: center;
	width: 100%;
	font-size: 1.6rem;
`

const CoordsContainer = styled.p`
	display: flex;
	border: 1px solid rgba(255,255,255,.2);
	border-radius: 4px;
	${CoordItem}{
		&:first-child{
			border-right: 1px solid rgba(255,255,255,.2);
		}
	}
`

export const CardStyled = {
	Wrapper,
	NumberIconContainer,
	CoordsContainer,
	CoordItem,
}