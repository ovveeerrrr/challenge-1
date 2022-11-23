import React, { MouseEvent } from "react"
import { TextStyled } from "../../styles/typographic"
import { TextWeight } from "../../styles/typographicHelper"
import { GameAreaStyled } from "./GameAreaStyled"
import { ReactComponent as StarPlayer1 } from "../../images/star.svg"
import { ReactComponent as StarPlayer2 } from "../../images/star-cross.svg"

export type ClickCoords = {
	x: number,
	y: number,
}

export type NewMovements = {
	isFirstPlayer?: boolean
} & ClickCoords

type Props = {
	isFirstPlayer?: boolean,
	newMovements: NewMovements[],
	onClick: (e: NewMovements) => void
}

const GameArea = (props: Props) => {

	const handleClick = (e: any) => {
		return props.onClick({
			x: e.clientX - e.target.offsetLeft,
			y: e.clientY - e.target.offsetTop,
			isFirstPlayer: props.isFirstPlayer,
		})
	}

	return (
		<GameAreaStyled.Wrapper isFirstPlayer={props.isFirstPlayer}>
			<TextStyled.Body14 textWeight={TextWeight.Bold}>
				Player {props.isFirstPlayer ? "01" : "02"}
			</TextStyled.Body14>

			<GameAreaStyled.Canvas onClick={handleClick}>
				{props.newMovements.map((move, i) => {
					return <GameAreaStyled.StarIcon
						top={move.y}
						left={move.x}
						key={i}>
						{move.isFirstPlayer ? <StarPlayer1 /> : <StarPlayer2/>}
				</GameAreaStyled.StarIcon>
				})}
			</GameAreaStyled.Canvas>

		</GameAreaStyled.Wrapper>
	)
}

export default GameArea