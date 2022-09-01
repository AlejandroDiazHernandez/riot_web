import { GetStaticPaths, GetStaticProps } from 'next'
import { NewsData } from '../../components/recent_new_list_item/Recent_new_li_item'
import Image from 'next/image'
import { ParsedUrlQuery } from 'querystring'

interface NewsIdPageProps {
	newsletter: NewsData
}

interface IParams extends ParsedUrlQuery {
	id: string
}

export const getStaticPaths: GetStaticPaths = async () => {
	const resNews = await fetch('http://localhost:3000/api/newsletter')
	const newsletters: NewsData[] = await resNews.json()

	const ids = newsletters.map((newsletter) => newsletter.id)
	const paths = ids.map((id) => ({ params: { id: id.toString() } }))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { id } = context.params as IParams

	const resNews = await fetch(`http://localhost:3000/api/newsletter/${id}`)
	const newsletter: NewsData = await resNews.json()

	return {
		props: {
			newsletter,
		},
		revalidate: 600,
	}
}

const NewsIdPage: React.FC<NewsIdPageProps> = ({ newsletter }) => {
	const { id, title, subtitle, image } = newsletter
	return (
		<div>
			<h1>{title}</h1>
			<h3>{subtitle}</h3>
			<Image src={image} width={800} height={500} />
		</div>
	)
}

export default NewsIdPage
