import styled from 'styled-components'

const UserBtn = () => {
	return (
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
	)
}

const SignOut = styled.div`
	position: absolute;
	top: 54px;
	transform: translate(50%);
	right: 50%;
	background: white;
	border-radius: 5px;
	width: 100px;
	height: 40px;
	font-size: 16px;
	transition-duration: 167ms;
	text-align: center;
	transition: all 0.5s ease;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: 0;
	visibility: hidden;
	box-shadow: 0 0px 3px 0px rgb(0 0 0 / 90%);
`

const User = styled.div`
	position: relative;
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

	a img:nth-child(1) {
		width: 24px;
		height: 24px;
		border-radius: 50%;
	}

	a img:nth-child(3) {
		width: 15px;
		height: 15px;
		opacity: 0.7;
	}

	@media (max-width: 992px) {
		${SignOut} {
			top: unset;
			bottom: 50px;
		}

		&:hover {
			${SignOut} {
				opacity: 1;
				visibility: visible;
			}
		}
	}
`

export default UserBtn
