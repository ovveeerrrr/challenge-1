import styled, { css, keyframes } from "styled-components"
import { thp } from "../../styles/themeHelpers"
import bgPattern from "../../images/background-pattern.svg"

type Props = {
	isFirstPlayer?:boolean,
}

const ShowStarAnimation = keyframes`
	from{scale:0; opacity:0}
	to{scale:1; opacity:1}
`
const LightAnimationPlayer1 = keyframes`
	from{
		filter: drop-shadow(0px 0px 10px transparent);
	}
	to{
		filter: drop-shadow(0px 0px 10px #CF1CD7);
	}
`
const LightAnimationPlayer2 = keyframes`
	from{
		filter: drop-shadow(0px 0px 10px transparent);
	}
	to{
		filter: drop-shadow(0px 0px 10px #E30473);
	}
`

const Canvas = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${thp.primary(c => c.level90)};
	border-radius: 16px;
	border-width:2px;
	border-style: solid;
	background-image: url(${bgPattern});
	position: relative;
	transition: all .3s ease-in;
	cursor: pointer;
	position: relative;
	overflow: hidden;
`

type StarCoords = {
	top: number,
	left: number,
}

const StarIcon = styled.span<StarCoords>`
	width: 40px;
	height: 40px;
	position: absolute;
	top: ${p => p.top}px;
	left: ${p => p.left}px;
	translate: -50% -50%;
	transition: all .3s ease-in-out;
	animation: ${ShowStarAnimation} .4s cubic-bezier(0.85, 0, 0.15, 1) forwards;
	transform-origin: 50% 50%;
`


const Player1Styles = css`
	color: ${thp.primary(c => c.level50)};
	${Canvas}{
		color: ${thp.primary(c => c.level50)}4D;
		&:hover{
			color: ${thp.primary(c => c.level50)};
		}
	}
	${StarIcon}{
		&:hover{
			clear: both;
			svg{
				animation: ${LightAnimationPlayer1} .5s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
			}
		}
	}
`
const Player2Styles = css`
	color: ${thp.secondary(c => c.level50)};
	${Canvas}{
		color: ${thp.secondary(c => c.level50)}4D;
		&:hover{
			color: ${thp.secondary(c => c.level50)};
		}
	}
	${StarIcon}{
		&:hover{
			svg{
				animation: ${LightAnimationPlayer2} .5s cubic-bezier(0.45, 0, 0.55, 1) infinite alternate;
			}
		}
	}
`

const Wrapper = styled.section<Props>`
	display: flex;
	flex-direction: column;
	text-transform: uppercase;
	gap: 9px;
	${p => (p.isFirstPlayer
		? Player1Styles
		: Player2Styles
	)};
`


export const GameAreaStyled = {
	Wrapper,
	Canvas,
	StarIcon,
}