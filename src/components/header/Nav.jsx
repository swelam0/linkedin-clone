import styled from 'styled-components'

const Nav = () => {
	return (
		<Container>
			<NavListWrap>
				<NavList className='active'>
					<a>
						<img src='/images/nav-home.svg' alt='img' />
						<span>home</span>
					</a>
				</NavList>
				<NavList>
					<a>
						<img src='/images/nav-network.svg' alt='img' />
						<span>network</span>
					</a>
				</NavList>
				<NavList>
					<a>
						<img src='/images/nav-jobs.svg' alt='img' />
						<span>jobs</span>
					</a>
				</NavList>
				<NavList>
					<a>
						<img src='/images/nav-messaging.svg' alt='img' />
						<span>messaging</span>
					</a>
				</NavList>
				<NavList>
					<a>
						<img src='/images/nav-notifications.svg' alt='img' />
						<span>notifications</span>
					</a>
				</NavList>
				<User>
					<a>
						<img src='/images/user.svg' alt='img' />
						<span>me</span>
						<img src='/images/down-icon.svg' alt='down' />
					</a>

					<SignOut>
						<a>sign out</a>
					</SignOut>
				</User>
				<Work>
					<a>
						<img src='/images/nav-work.svg' alt='img' />
						<span>work</span>
						<img src='/images/down-icon.svg' alt='down' />
					</a>
				</Work>
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

const NavList = styled.li`
	display: flex;
	align-items: center;

	@media (max-width: 992px) {
		width: 100%;
	}

	a {
		display: flex;
		align-items: center;
		flex-direction: column;
		background: transparent;
		font-size: 12px;
		flex-wrap: 400;
		justify-content: center;
		line-height: 1.5;
		min-height: 42px;
		min-width: 80px;
		position: relative;
		text-decoration: none;
		transition: all 0.5s ease;
		cursor: pointer;

		span {
			color: rgba(0, 0, 0, 0.6);
			display: flex;
			align-items: center;
			transition: all 0.5s ease;
			text-transform: capitalize;
		}

		@media (max-width: 992px) {
			margin: auto;
			min-width: 70px;
		}
	}

	&:hover,
	&.active {
		a {
			span {
				color: rgba(0, 0, 0, 0.9);
			}
		}
	}
`

const User = styled(NavList)`
	a > svg {
		width: 24px;
		border-radius: 50%;
	}

	a > img {
		width: 24px;
		height: 24px;
		border-radius: 50%;
	}

	span {
		display: flex;
		align-items: center;
	}

	&:hover {
		${SignOut} {
		}
	}
`

const Work = styled(User)`
	border-left: 1px solid rgba(0, 0, 0, 0.08);
`
const SignOut = styled.div`
	position: absolute;
	top: 54px;
	background: white;
	border-radius: 0 0 5px 5px;
	width: 100px;
	height: 40px;
	font-size: 16px;
	transition-duration: 167ms;
	text-align: center;
	display: none;
`

export default Nav
