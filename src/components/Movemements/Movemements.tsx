import React from "react"
import Card from "../Card/Card"
import { MovementsStyled } from "./MovemementsStyled"
import { TextStyled } from "../../styles/typographic"
import { TextWeight } from "../../styles/typographicHelper"
import { NewMovements } from "../GameArea/GameArea"

type Props = {
	movements?: NewMovements[],
}

const Movements = React.forwardRef((
	props: Props,
	ref: React.ForwardedRef<HTMLElement>) => {
	return (
		<MovementsStyled.Wrapper>
			<TextStyled.Body14 textWeight={TextWeight.Bold}>
				Movements
			</TextStyled.Body14>
			<MovementsStyled.CardsContainer ref={ref}>
				{props.movements && props.movements.length > 0
					? props.movements?.map((move, i) => {
						return <Card
							key={i}
							isFirstPlayer={move.isFirstPlayer}
							x={move.x}
							y={move.y}
							movementNumber={i + 1}
						/>
					})
					: <MovementsStyled.NoHasCards>
						No move has been made yet
					</MovementsStyled.NoHasCards>
			}
			</MovementsStyled.CardsContainer>
		</MovementsStyled.Wrapper>
	)
})
Movements.displayName = "Movements"

export default Movements