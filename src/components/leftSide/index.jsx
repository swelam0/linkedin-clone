import styled from 'styled-components'
import ComunityCard from './ComunityCard'
import Widget from './Widget'

const LeftSide = () => {
	return (
		<Container>
			<ArtCard>
				<UserInfo>
					<CardBackground />

					<a>
						<Photo />
						<Link>Welcome, there!</Link>
					</a>

					<a>
						<AddPhotoText>Add a Photo</AddPhotoText>
					</a>
				</UserInfo>

				<Widget />
			</ArtCard>

			<ComunityCard />
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
const ArtCard = styled.div`
	text-align: center;
	overflow: hidden;
	margin-bottom: 8px;
	background-color: #fff;
	border-radius: 5px;
	transition: box-shadow 83ms;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`

const UserInfo = styled.div`
	border-bottom: 1px solid rgba(0, 0, 0, 0.15);
	padding: 12px 12px 16px;
	word-wrap: break-word;
	word-break: break-word;
`

const CardBackground = styled.div`
	background-image: url('/images/card-bg.svg');
	background-position: center;
	background-size: 462px;
	height: 54px;
	margin: -12px -12px 0;
`

const Photo = styled.div`
	box-shadow: none;
	background-image: url('/images/photo.svg');
	width: 72px;
	height: 72px;
	box-sizing: border-box;
	background-clip: content-box;
	background-color: white;
	background-position: center;
	background-size: 50%;
	background-repeat: no-repeat;
	border: 2px solid white;
	margin: -38px auto 12px;
	border-radius: 50%;
`

const Link = styled.div`
	font-size: 16px;
	line-height: 1.5;
	color: rgba(0, 0, 0, 0.9);
	font-weight: 600;
`

const AddPhotoText = styled.div`
	color: #0a66c2;
	margin-top: 4px;
	font-size: 12px;
	line-height: 1.33;
	font-weight: 400;
`

export default LeftSide
