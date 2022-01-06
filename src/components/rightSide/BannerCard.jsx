import styled from 'styled-components'

const BannerCard = () => {
	return (
		<Container>
			<img
				src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg'
				alt='img'
			/>
		</Container>
	)
}

const Container = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
	padding: 12px;

	img {
		width: 100%;
		height: 100%;
	}
`

export default BannerCard
