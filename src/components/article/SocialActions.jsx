import styled from 'styled-components'

const SocialActions = () => {
	return (
		<Container>
			<button>
				<img src='/images/like-icon.svg' alt='icon' />
				<span>like</span>
			</button>

			<button>
				<img src='/images/comment-icon.svg' alt='icon' />
				<span>comment</span>
			</button>

			<button>
				<img src='/images/share-icon.svg' alt='icon' />
				<span>share</span>
			</button>

			<button>
				<img src='/images/send-icon.svg' alt='icon' />
				<span>send</span>
			</button>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
	margin: 0;
	min-height: 14px;
	padding: 4px 8px;

	button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 8px;
		background-color: transparent;
		color: #0a66c2;
		border: 0;
		box-shadow: none;
		text-transform: capitalize;
		transition: all 0.5s ease;
		border-radius: 3px;
		width: 100%;

		@media (min-width: 992px) {
			span {
				margin-left: 8px;
			}
		}

		img {
			opacity: 0.7;
			margin-right: 5px;
		}

		&:hover {
			background-color: rgba(0, 0, 0, 0.08);
		}
	}
`

export default SocialActions
