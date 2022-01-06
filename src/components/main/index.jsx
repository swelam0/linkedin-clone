import styled from 'styled-components'
import Article from '../article'
import ShareBox from './ShareBox'

const Main = () => {
	return (
		<Container>
			<ShareBox />
			<Article />
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
