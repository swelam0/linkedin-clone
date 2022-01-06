import styled from 'styled-components'
import ShareBox from './ShareBox'

const Main = () => {
	return (
		<Container>
			<ShareBox />
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	padding: 0 30px;

	@media (max-width: 992px) {
		padding: 30px 0;
	}
`

export default Main
