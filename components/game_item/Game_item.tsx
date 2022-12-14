import styled from '@emotion/styled'
import Link from 'next/link'

interface GameItemProps {
	gameData: GameData
}

export interface GameData {
	title: string
	image: string
	url: string
}

interface GameItemDivProps {
	image: string
}

const GameItem: React.FC<GameItemProps> = ({ gameData }) => {
	const { title, image, url } = gameData
	return (
		<Link href={url}>
			<a target="_blank">
				<GameTarget image={image}>
					<p>{title}</p>
				</GameTarget>
			</a>
		</Link>
	)
}

export default GameItem

/* const GameItemDiv = styled.div<GameItemDivProps>`
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
` */

const GameTarget = styled.div<GameItemDivProps>`
	background-image: url(${(props) => props.image});
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	object-fit: cover;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
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
