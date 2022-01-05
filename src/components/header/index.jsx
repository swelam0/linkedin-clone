import styled from 'styled-components'
import NavBar from './NavBar'
import Search from './Search'

const Header = () => {
	return (
		<Container>
			<Content>
				<Logo>
					<a href='/home'>
						<img src='/images/home-logo.svg' alt='logo' />
					</a>
				</Logo>

				<Search />
				<NavBar />
			</Content>
		</Container>
	)
}

const Container = styled.div`
	position: fixed;
	background-color: white;
	border-bottom: 1px solid rgba(0, 0, 0, 0.08);
	left: 0;
	top: 0;
	padding: 0 24px;
	width: 100vw;
	z-index: 100;
`
const Content = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
	min-height: 100%;
	max-width: 1128px;
	padding: 5px 0;
`
const Logo = styled.div`
	margin-right: 8px;
	font-size: 0px;
`

export default Header
