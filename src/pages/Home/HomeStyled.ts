import styled from "styled-components"

const Container = styled.main`
	width: 100%;
	height: calc(100vh - 66px);
	padding: 40px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr auto;
	gap: 40px 50px;
`

export const HomeStyled = {
	Container,
}