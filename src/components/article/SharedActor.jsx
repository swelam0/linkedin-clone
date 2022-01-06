import styled from 'styled-components'

const SharedActor = () => {
	return (
		<Container>
			<div>
				<a>
					<img src='/images/user.svg' alt='img' />
				</a>

				<div>
					<span>title</span>
					<span>info</span>
					<span>date</span>
				</div>
			</div>

			<button>
				<img src='/images/ellipsis.svg' alt='icon' />
			</button>
		</Container>
	)
}

const Container = styled.div`
	padding-right: 40px;
	flex-wrap: nowrap;
	padding: 12px 16px 0;
	margin-bottom: 8px;
	display: flex;
	align-items: center;

	& > div {
		margin-right: 12px;
		flex-grow: 1;
		overflow: hidden;
		display: flex;
		text-decoration: none;

		img {
			width: 48px;
			height: 48px;
			border-radius: 50%;
		}

		& > div {
			display: flex;
			flex-direction: column;
			flex-grow: 1;
			flex-basis: 0;
			margin-left: 8px;
			overflow: hidden;

			span {
				text-align: left;
				text-transform: capitalize;

				&:first-child {
					font-size: 14px;
					font-weight: 700;
					color: rgba(0, 0, 0, 1);
				}

				&:nth-child(n + 1) {
					font-weight: 12px;
					color: rgba(0, 0, 0, 0.6);
				}
			}
		}
	}

	button {
		position: absolute;
		right: 12px;
		top: 2px;
		background: transparent;
		border: black;
		outline: none;
	}
`
export default SharedActor
