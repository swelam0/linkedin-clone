import styled from 'styled-components'

const WorkBtn = () => {
	return (
		<Work>
			<a>
				<img src='/images/nav-work.svg' alt='img' />
				<span>work</span>
				<img src='/images/down-icon.svg' alt='down' />
			</a>
		</Work>
	)
}

const Work = styled.div`
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
		width: 20px;
		height: 20px;
		border-radius: 50%;
	}

	a img:nth-child(3) {
		width: 15px;
		height: 15px;
		opacity: 0.7;
	}

	border-left: 1px solid rgba(0, 0, 0, 0.08);
`

export default WorkBtn
