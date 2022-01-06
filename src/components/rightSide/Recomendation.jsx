import styled from 'styled-components'

const Recomendation = () => {
	return (
		<Container>
			View all recomendations
			<img src='/images/right-icon.svg' alt='icon' />
		</Container>
	)
}

const Container = styled.a`
	color: #0a66c2;
	display: flex;
	align-items: center;
	font-size: 14px;
`

export default Recomendation
