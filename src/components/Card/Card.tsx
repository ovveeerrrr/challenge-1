import React from "react"
import { TextStyled } from "../../styles/typographic"
import { CardStyled } from "./CardStyled"
import { ReactComponent as StarPlayer1 } from "../../images/star.svg"
import { ReactComponent as StarPlayer2 } from "../../images/star-cross.svg"
import { NewMovements } from "../GameArea/GameArea"

type Props = {
	movementNumber: number,
} & NewMovements

const Card = (props:Props) => {
	return (
		<CardStyled.Wrapper isFirstPlayer={props.isFirstPlayer}>
			<CardStyled.NumberIconContainer>
				<TextStyled.Body14>
					{props.movementNumber < 10 ? "0" + props.movementNumber : props.movementNumber}
				</TextStyled.Body14>
				{props.isFirstPlayer ? <StarPlayer1 /> : <StarPlayer2 />}
			</CardStyled.NumberIconContainer>
			<CardStyled.CoordsContainer>
				<CardStyled.CoordItem>
					{props.x}
				</CardStyled.CoordItem>
				<CardStyled.CoordItem>
					{props.y}
				</CardStyled.CoordItem>
			</CardStyled.CoordsContainer>
		</CardStyled.Wrapper>
	)
}

export default Card