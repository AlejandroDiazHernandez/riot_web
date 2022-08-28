import styled from '@emotion/styled'
import RiotFist from '../svg/Riot_fist'

interface Props {
	newsData: NewsData
	index: string
}

interface NewsData {
	title: string
	subtitle: string
	image: string
}

interface ImageInfoProps {
	image: string
	index: string
}

const RecentNewLiItem: React.FC<Props> = ({ newsData, index }) => {
	const { title, subtitle, image } = newsData
	return (
		<MainDiv>
			<TextInfo image={image} index={index}>
				<h3>{title}</h3>
				<p>{subtitle}</p>
			</TextInfo>
			{index === '0' ? null : <ImageInfo image={image} index={index} />}
			<span>
				<RiotFist width={25} height={25} />
			</span>
		</MainDiv>
	)
}

export default RecentNewLiItem

const MainDiv = styled.div`
	height: 100%;
	width: 100%;
	position: relative;
	> span {
		position: absolute;
		top: 0;
		right: 0;
	}
`

const TextInfo = styled.div<ImageInfoProps>`
	height: 100%;
	width: 100%;
	background-color: #222121;
	padding: 35px;
	border-radius: 15px;
	border: 2px solid transparent;
	box-sizing: border-box;
	background-image: url(${({ index, image }) =>
		index === '0' ? image : null});
	background-size: ${({ index }) => (index === '0' ? 'cover' : null)};
	background-position: ${({ index }) => (index === '0' ? 'center' : null)};
	position: ${({ index }) => (index === '0' ? 'absolute' : null)};
	right: ${({ index }) => (index === '0' ? '0' : null)};
	top: ${({ index }) => (index === '0' ? '0' : null)};
	background-repeat: ${({ index }) => (index === '0' ? 'no-repeat' : null)};
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
