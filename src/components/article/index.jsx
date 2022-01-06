import styled from 'styled-components'
import SharedActor from './SharedActor'
import SocialActions from './SocialActions'
import SocialCounts from './SocialCounts'

const Article = () => {
	return (
		<Container>
			<SharedActor />

			<Description>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ab dolorum
				veniam at sapiente perferendis facilis, facere consectetur hic iste dicta
				vero culpa, odit illum corrupti aliquam minima tempora laudantium ratione
				quia tempore a quasi cumque mollitia! Aspernatur, voluptate! Neque deleniti
				enim error facere. Blanditiis quisquam laboriosam nesciunt animi ex!
			</Description>

			<SharedImg>
				<a>
					<img src='/images/image.jpg' alt='img' />
				</a>
			</SharedImg>

			<SocialCounts />
			<SocialActions />
		</Container>
	)
}

const Container = styled.div`
	text-align: center;
	background-color: #fff;
	border-radius: 5px;
	position: relative;
	border: none;
	box-shadow: 0 0 0 1ps rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 /20%);

	padding: 0px;
`

const Description = styled.div`
	padding: 4px 16px;
	overflow: hidden;
	color: rgba(0, 0, 0, 0.9);
	font-size: 14px;
	text-align: left;
	font-weight: 400;
`

const SharedImg = styled.div`
	margin-top: 8px;
	width: 100%;
	display: block;
	position: relative;
	background-color: #f9fafb;

	img {
		object-fit: contain;
		width: 100%;
		height: 100%;
	}
`

export default Article
