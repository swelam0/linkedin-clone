import styled from 'styled-components'

const NavListContainer = () => {
	return (
		<>
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
		</>
	)
}

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

export default NavListContainer
