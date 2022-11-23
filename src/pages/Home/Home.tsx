import React, { useState } from "react"
import GameArea, { NewMovements } from "../../components/GameArea/GameArea"
import Header from "../../components/Header/Header"
import Movements from "../../components/Movemements/Movemements"
import { HomeStyled } from "./HomeStyled"


const Home = () => {
	const [newMovementsAdded, setNewMovementsAdded] = useState<NewMovements[]>([])

	const movementsAreaRef = React.useRef<HTMLElement>(null)

	const handleClick = (e: NewMovements) => {
		if (e.x) {
			setNewMovementsAdded([...newMovementsAdded, e])
			if (movementsAreaRef.current) {
				movementsAreaRef.current.scrollLeft = newMovementsAdded.length * 170
			}
		}

	}

	return (
		<>
			<Header />
			<HomeStyled.Container>
				<GameArea
					onClick={handleClick}
					newMovements={newMovementsAdded.filter(move => move.isFirstPlayer)}
					isFirstPlayer
				/>
				<GameArea
					onClick={handleClick}
					newMovements={newMovementsAdded.filter(move => !move.isFirstPlayer)}
				/>
				<Movements movements={newMovementsAdded} ref={movementsAreaRef} />
			</HomeStyled.Container>
		</>
	)
}

export default Home