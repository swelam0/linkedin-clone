import styled from 'styled-components'

const Widget = () => {
	return (
		<>
			<Container>
				<a>
					<div>
						<span>connections</span>
						<span>Grow your network</span>
					</div>

					<img src='/images/widget-icon.svg' alt='icon' />
				</a>
			</Container>

			<Item>
				<span>
					<img src='/images/item-icon.svg' alt='icon' />
					May items
				</span>
			</Item>
		</>
	)
}

const Container = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);

	& > a {
		text-decoration: none;
		display: flex;
		justify-content: space-between;
		padding: 15px;
		align-items: center;
		transition: all 0.5s ease;

		&:hover {
			background-color: rgba(0, 0, 0, 0.08);
		}

		div {
			display: flex;
			flex-direction: column;
			text-align: left;

			span {
				font-size: 12px;
				font-weight: 600;
				line-height: 1.333;

				&:first-child {
					color: rgba(0, 0, 0, 0.6);
				}
				&:last-child {
					color: rgba(0, 0, 0, 1);
				}
			}
		}
	}

	svg {
		color: rgba(0, 0, 0, 1);
	}
`

const Item = styled.a`
	border-color: rgba(0, 0, 0, 0.8);
	text-align: left;
	padding: 12px;
	font-size: 14px;
	display: block;
	transition: all 0.5s ease;

	span {
		display: flex;
		align-items: center;
		color: rgba(0, 0, 0, 1);

		svg {
			color: rgba(0, 0, 0, 1);
		}
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
	}
`

export default Widget
