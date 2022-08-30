import { useRouter } from 'next/router'

const NewsTitlePage: React.FC = () => {
	const router = useRouter()

	const title = router.query.title

	return <p>{title}</p>
}

export default NewsTitlePage
