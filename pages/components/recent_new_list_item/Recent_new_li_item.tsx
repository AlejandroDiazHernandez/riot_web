import styled from '@emotion/styled'
import RiotFist from '../svg/Riot_fist'

interface Props {
	newsData: NewsData
}

interface NewsData {
	title: string
	subtitle: string
	image: string
}

interface ImageInfoProps {
	image: string
}

const RecentNewLiItem: React.FC<Props> = ({ newsData }) => {
	const { title, subtitle, image } = newsData
	return (
		<MainDiv>
			<TextInfo>
				<h3>{title}</h3>
				<p>{subtitle}</p>
			</TextInfo>
			<ImageInfo image={image} />
			<span>
				<RiotFist width={25} height={25} />
			</span>
		</MainDiv>
	)
}

export default RecentNewLiItem

const MainDiv = styled.div`
	position: relative;
	> span {
		position: absolute;
		top: 0;
		right: 0;
	}
`

const TextInfo = styled.div`
	width: 75%;
	background-color: #222121;
	padding: 35px;
	border-radius: 15px;
	border: 2px solid transparent;
	> h3 {
		color: white;
		font-size: 25px;
		margin: 0;
		padding-right: 25%;
	}
	> p {
		color: white;
		font-size: 20px;
		margin: 0;
		margin-top: 15px;
		padding-right: 25%;
	}
`

const ImageInfo = styled.div<ImageInfoProps>`
	position: absolute;
	right: 0;
	top: 0;
	width: 25%;
	height: 100%;
	background-image: url(${({ image }) => image});
	background-size: cover;
	background-position: center;
	border-radius: 15px;
`
