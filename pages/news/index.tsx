import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { NewsData } from '../../components/recent_new_list_item/Recent_new_li_item'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../../components/Card'
import styled from '@emotion/styled'

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
		<section>
			<Ul>
				{filteredNews.map((news) => (
					<Link key={news.id} href={`/news/${news.id}`}>
						<li>
							<Card news={news} />
						</li>
					</Link>
				))}
			</Ul>
		</section>
	) : (
		<section>
			<Ul>
				{newsletter.map((news) => (
					<Link key={news.id} href={`/news/${news.id}`}>
						<li>
							<Card news={news} />
						</li>
					</Link>
				))}
			</Ul>
		</section>
	)
}

export default NewsPage

const Ul = styled.ul`
	padding: 0;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 15px;
	> li {
		list-style: none;
	}
`
