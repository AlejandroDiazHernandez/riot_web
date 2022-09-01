import { NewsData } from '../components/recent_new_list_item/Recent_new_li_item'
import Image from 'next/image'
import styled from '@emotion/styled'

interface Card {
	news: NewsData
}

const Card: React.FC<Card> = ({ news }) => {
	const { title, subtitle, image, id } = news

	return (
		<MainDiv>
			<Image src={image} width={500} height={350} />
			<h1>{title}</h1>
			<h4>{subtitle}</h4>
		</MainDiv>
	)
}

export default Card

const MainDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;
	align-items: center;
	border: 2px solid black;
	cursor: pointer;
	background-color: #0b0d16;
	padding: 15px;
	:hover {
		border: 2px solid gold;
	}
`
