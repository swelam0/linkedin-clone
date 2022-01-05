import styled from 'styled-components'
import NavListContainer from './NavListContainer'
import UserBtn from './UserBtn'
import WorkBtn from './WorkBtn'

const Nav = () => {
	return (
		<Container>
			<NavListWrap>
				<NavListContainer />
				<UserBtn />
				<WorkBtn />
			</NavListWrap>
		</Container>
	)
}

const Container = styled.nav`
	margin-left: auto;
	display: block;

	@media (max-width: 992px) {
		position: fixed;
		left: 0;
		bottom: 0;
		background: white;
		width: 100%;
		padding: 5px 0;
	}
`

const NavListWrap = styled.ul`
	display: flex;
	flex-wrap: nowrap;
	list-style: none;

	.active {
		span:after {
			content: '';
			transform: scaleX(1);
			border-bottom: 2px solid var(--white, #fff);
			bottom: -5px;
			left: 0;
			position: absolute;
			transition: transform 0.2s ease-in-out;
			width: 100%;
			border-color: rgba(0, 0, 0, 0.9);
		}
	}
`

export default Nav
