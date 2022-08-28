import styled from '@emotion/styled'
import Image from 'next/image'

interface GameItemProps {
	gameData: GameData
}

interface GameData {
	title: string
	image: string
}

interface GameItemDivProps {
	image: string
}

const GameItem: React.FC<GameItemProps> = ({ gameData }) => {
	const { title, image } = gameData
	return (
		<GameItemDiv image={image}>
			<p>{title}</p>
		</GameItemDiv>
	)
}

export default GameItem

const GameItemDiv = styled.div<GameItemDivProps>`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-image: url(${(props) => props.image});
	width: 100%;
	object-fit: cover;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 400px;
	min-width: 200px;
	cursor: pointer;
	border: 2px solid transparent;
	> p {
		margin-left: 15px;
		font-size: 26px;
		font-weight: bold;
		color: white;
	}
	:hover {
		border: 2px solid wheat;
	}
`
