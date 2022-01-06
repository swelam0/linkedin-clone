import styled from 'styled-components'

const SocialCounts = () => {
	return (
		<Container>
			<li>
				<button>
					<img
						src='https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt'
						alt='icon'
					/>

					<img
						src='https://static-exp1.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8'
						alt='icon'
					/>

					<img
						src='https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22'
						alt='icon'
					/>
					<span>75</span>
				</button>
			</li>
			<li>
				<a>2 comments</a>
			</li>
		</Container>
	)
}

const Container = styled.div`
	line-height: 1.3;
	display: flex;
	align-items: center;
	overflow: auto;
	margin: 0 16px;
	padding: 8px 0;
	border-bottom: 1px solid #e9e5df;
	list-style: none;

	li {
		margin-right: 5px;
		font-size: 12px;

		button {
			display: flex;
			background-color: transparent;
			border: 0;
			box-shadow: none;
		}
	}
`

export default SocialCounts
