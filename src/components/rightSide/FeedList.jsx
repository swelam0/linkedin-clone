import styled from 'styled-components'

const FeedList = () => {
	return (
		<Container>
			<li>
				<a>
					<Avatar />
				</a>
				<div>
					<span>#linkedin</span>
					<button>follow</button>
				</div>
			</li>

			<li>
				<a>
					<Avatar />
				</a>
				<div>
					<span>#linkedin</span>
					<button>follow</button>
				</div>
			</li>
		</Container>
	)
}

const Container = styled.ul`
	list-style: none;
	margin-top: 16px;

	li {
		display: flex;
		align-items: center;
		margin: 12px 0;
		position: relative;
		font-size: 14px;

		& > div {
			display: flex;
			flex-direction: column;
		}

		button {
			background-color: transparent;
			color: rgba(0, 0, 0, 0.6);
			padding: 2px 15px;
			align-items: center;
			border-radius: 15px;
			box-sizing: border-box;
			font-weight: 600;
			display: inline-flex;
			justify-content: center;
			min-height: 32px;
			max-width: 480px;
			text-align: center;
			outline: none;
			border: 1px solid rgba(0, 0, 0, 0.4);
			transition: all 0.5s ease;

			&:hover {
				color: #70b5f9;
				border-color: #70b5f9;
			}
		}
	}
`

const Avatar = styled.div`
	background-image: url('https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	width: 48px;
	height: 48px;
	margin-right: 8px;
`
export default FeedList
