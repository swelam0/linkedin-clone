import styled from 'styled-components'

const ComunityCard = () => {
	return (
		<Container>
			<a>
				<span>Groups</span>
			</a>

			<a>
				<span>
					Events
					<img src='/images/plus-icon.svg' alt='icon' />
				</span>
			</a>

			<a>
				<span>Follow Hashtags</span>
			</a>

			<a>
				<span>Deiscover more</span>
			</a>
		</Container>
	)
}

const Container = styled.div`
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	transition: box-shadow 83ms;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);

	display: flex;
	padding: 8xp 0 0;
	text-align: left;
	flex-direction: column;

	a {
		color: black;
		padding: 6px 12px;
		font-size: 14px;
		transition: all 0.5s ease;
		font-weight: 400;

		&:hover {
			color: #0a66c2;
		}

		span {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&:last-child {
			color: rgba(0, 0, 0, 0.6);
			text-decoration: none;
			border-top: 1px solid #d6cec2;
			padding: 12px;

			&:hover {
				background-color: rgba(0, 0, 0, 0.08);
			}
		}
	}
`

export default ComunityCard
