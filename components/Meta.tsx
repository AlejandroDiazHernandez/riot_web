import Head from 'next/head'

interface MetaProps {
	title?: string
	keywords?: string
	description?: string
}

const Meta: React.FC<MetaProps> = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width,initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href="/favicon.ico" />
			<title>{title}</title>
		</Head>
	)
}

Meta.defaultProps = {
	title: 'Riot Games',
	keywords: 'Games, eSports',
	description: 'Web for true gamers',
}

export default Meta
