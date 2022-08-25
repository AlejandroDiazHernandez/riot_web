interface Props {
	key: string
	newsData: NewsData
}

interface NewsData {
	text: string
	image: string
}

const RecentNewLiItem: React.FC<Props> = ({ newsData }) => {
	const { text, image } = newsData
	return <p>{text}</p>
}

export default RecentNewLiItem
