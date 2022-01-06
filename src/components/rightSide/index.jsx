import styled from 'styled-components'
import BannerCard from './BannerCard'
import FeedList from './FeedList'
import Recomendation from './Recomendation'

const RightSide = () => {
	return (
		<Container>
			<FollowCard>
				<Title>
					<h2>Add your feed</h2>
					<img src='/images/feed-icon.svg' alt='icon' />
				</Title>

				<FeedList />
				<Recomendation />
			</FollowCard>

			<BannerCard />
		</Container>
	)
}

const Container = styled.div`
	width: 100%;
	max-width: 360px;

	@media (max-width: 992px) {
		max-width: unset;
	}
`

const FollowCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgba(0 0 0 /15%), 0 0 0 rgba(0 0 0 /20%);
	padding: 12px;
`

const Title = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	font-size: 16px;
	width: 100%;
	color: rgba(0, 0, 0, 0.6);
`

export default RightSide
