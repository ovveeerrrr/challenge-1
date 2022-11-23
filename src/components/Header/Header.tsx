import React from "react"
import { TextStyled } from "../../styles/typographic"
import { HeaderStyled } from "./HeaderStyled"

const Header = () => {
	return (
		<HeaderStyled.Wrapper>
			<TextStyled.Heading18>
				CHALLENGE ONE
			</TextStyled.Heading18>
			<HeaderStyled.Avatar>
				O
			</HeaderStyled.Avatar>
		</HeaderStyled.Wrapper>
	)
}

export default Header