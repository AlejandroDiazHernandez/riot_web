import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
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
	const router = useRouter()

	const { q } = router.query
	let filteredNews: NewsData[] = []

	if (q && q.length > 0) {
		filteredNews = newsletter.filter((news) =>
			new RegExp(q.toString().toLowerCase(), 'i').test(
				news.title.toLowerCase(),
			),
		)
	}

	return filteredNews?.length > 0 ? (
		<div>
			<p>Noticias frescas!</p>
			{filteredNews.map((news) => (
				<p key={news.id}>{news.title}</p>
			))}
		</div>
	) : (
		<div>
			<p>Noticias frescas!</p>
			{newsletter.map((news) => (
				<p key={news.id}>{news.title}</p>
			))}
		</div>
	)
}

export default NewsPage
