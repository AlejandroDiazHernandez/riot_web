import { GetStaticProps } from 'next'
import { NewsData } from '../../components/recent_new_list_item/Recent_new_li_item'

interface NewsPageProps {
	newsletter: NewsData[]
}

export const getStaticProps: GetStaticProps<NewsPageProps> = async () => {
	const resNews = await fetch('http://localhost:3000/api/newsletter')
	const newsletter: NewsData[] = await resNews.json()

	return {
		props: {
			newsletter,
		},
		revalidate: 600,
	}
}

const NewsPage: React.FC<NewsPageProps> = ({ newsletter }) => {
	return (
		<div>
			<p>Noticias frescas!</p>
			{newsletter.map((news) => (
				<p key={news.id}>{news.title}</p>
			))}
		</div>
	)
}

export default NewsPage
