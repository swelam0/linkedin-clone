import styled from 'styled-components'

import RightSide from '../components/rightSide'
import Main from '../components/main'
import LeftSide from '../components/leftSide'

const HomePage = () => {
	return (
		<Container>
			<Section>
				<h5>
					<a>Hiring in a hurry? -</a>
				</h5>
				<p>find talented pros record time with Upwork and keep business moving.</p>
			</Section>

			<Layout>
				<LeftSide />
				<Main />
				<RightSide />
			</Layout>
		</Container>
	)
}

const Container = styled.div`
	padding-top: 70px;
	max-width: 100%;

	@media (max-width: 992px) {
		padding-top: 50px;
	}
`

const Section = styled.div`
	min-height: 50px;
	padding: 16px;
	box-sizing: content-box;
	text-align: center;
	display: flex;
	justify-content: center;
	text-decoration: underline;
	margin-bottom: 40px;

	h5 {
		color: #0a66c2;
		font-size: 14px;
		a {
			font-weight: 700;
		}
	}

	p {
		font-size: 14px;
		color: #434649;
		font-weight: 600;
	}

	@media (max-width: 992px) {
		flex-direction: column;
		padding: 0 5px;
		text-decoration: unset;

		h5 {
			text-decoration: underline;
		}

		p {
			margin-top: 10px;
		}
	}
`

const Layout = styled.div`
	display: grid;
	grid-template-areas: 'leftside main rightside';
	grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px 7fr);
	column-gap: 25px;
	row-gap: 25px;
	/* grid-template-rows: auto; */
	margin: 25px 0;

	@media (max-width: 992px) {
		display: flex;
		flex-direction: column;
		padding: 0 5px;
	}
`

export default HomePage
