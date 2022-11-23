import styled from "styled-components"
import { thp } from "../../styles/themeHelpers"
import { TextStyled } from "../../styles/typographic"

const Wrapper = styled.header`
	padding: 18px 40px;
	display: grid;
	grid-template-columns: 1fr 32px;
	background-color: ${thp.primary(c => c.level90)};
	place-content: center;
	${TextStyled.Heading18}{
		font-weight: 700;
		display: flex;
		align-items: center;
	};
`


const Avatar = styled.figure`
	width: 30px;
	height: 30px;
	border-radius: 30px;
	background-color: ${thp.common(c => c.white)};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.6rem;
	font-weight: 600;
	color: ${thp.common(c => c.black)};
	cursor: pointer;
	transition: all .3s ease-in-out;
	position: relative;
	overflow: hidden;
	&:after{
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 100%;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-image: none;
		background-image: url("https://pbs.twimg.com/profile_images/685719769383874560/_iuWsWij_400x400.png");
		transition: all .2s ease-out;
		transform: scale(1.5);
		opacity: 0;
	}
	&:hover{
		background-color: transparent;
		color: transparent;
		&:after{
			transform: scale(1);
			opacity: 1;
		}
	}
`



export const HeaderStyled = {
	Wrapper,
	Avatar,
}