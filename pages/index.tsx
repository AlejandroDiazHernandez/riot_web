import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Fragment } from 'react'
import AllButtons from './components/buttons/All_buttons'
import GameItem from './components/game_item/Game_item'
import RecentNewLiItem from './components/recent_new_list_item/Recent_new_li_item'

const DUMMY_NEWS = [
	{
		title: 'Se eliminan las cuentas inactivas',
		subtitle: 'Noticias',
		image: '/images/interface.png',
	},
	{
		title: 'La guerra del poro',
		subtitle: 'Minijuegos',
		image: '/images/poros.png',
	},
	{
		title: 'Rainbow rioters',
		subtitle: 'Dentro de Riot',
		image: '/images/señora.png',
	},
	{
		title: 'Avance orgullo 2022',
		subtitle: 'Dentro de Riot',
		image: '/images/riot_pride.png',
	},
]

const DUMMY_NEWSLETTER = [
	{
		title: 'Noticias Prime',
		subtitle: 'Noticias',
		image: '/images/señor.png',
	},
	{
		title: 'Se eliminan las cuentas inactivas',
		subtitle: 'Noticias',
		image: '/images/interface.png',
	},
	{
		title: 'La guerra del poro',
		subtitle: 'Minijuegos',
		image: '/images/poros.png',
	},
	{
		title: 'Rainbow rioters',
		subtitle: 'Dentro de Riot',
		image: '/images/señora.png',
	},
	{
		title: 'Avance orgullo 2022',
		subtitle: 'Dentro de Riot',
		image: '/images/riot_pride.png',
	},
]

const DUMMY_GAMES = [
	{
		title: 'League Of Legends',
		image: '/images/league.jpg',
	},
	{
		title: 'Valorant',
		image: '/images/valorant.png',
	},
	{
		title: 'Team Fight Tactics',
		image: '/images/tft.jpg',
	},
	{
		title: 'Wild Rift',
		image: '/images/wild_rift.png',
	},
	{
		title: 'Legends Of Runeterra',
		image: '/images/runeterra.png',
	},
	{
		title: 'Ruined King',
		image: '/images/ruined_king.png',
	},
]

interface NewsLetterLiProps {
	index: string
}

interface GamesLiProps {
	index: string
}

//Commented code was flex box
const Home: NextPage = () => {
	return (
		<Fragment>
			<MainBannerSection>
				<MainBannerInfo>
					<Image src={'/images/star_guardian.webp'} width={750} height={125} />
					<p>Adentrate en este nuevo mundo</p>
					<p>
						Adentrate en este nuevo mundo,Adentrate en este nuevo
						mundo,Adentrate en este nuevo mundo,Adentrate en este nuevo mundo
					</p>
					<AllButtons>Descúbrelo!</AllButtons>
				</MainBannerInfo>
			</MainBannerSection>
			<NewsSection>
				<BlockColumns>
					<HeadLine>
						<p>Actualidad</p>
						<AllButtons secondary>Ver Todo</AllButtons>
					</HeadLine>
					<NewsLetterUl>
						{DUMMY_NEWSLETTER.map((newsData, index) => (
							<NewsLetterLi key={newsData.title} index={index.toString()}>
								<RecentNewLiItem newsData={newsData} index={index.toString()} />
							</NewsLetterLi>
						))}
					</NewsLetterUl>
					{/* <RecentNewsContainer>
						<RecentNewsFrontPage>
							<p>NoticiasPrime</p>
						</RecentNewsFrontPage>
						<RecentNewsUl>
							{DUMMY_NEWS.map((recentNew) => (
								<li key={recentNew.title}>
									<RecentNewLiItem newsData={recentNew} />
								</li>
							))}
						</RecentNewsUl>
					</RecentNewsContainer> */}
				</BlockColumns>
			</NewsSection>
			<GamesSection>
				<BlockColumns>
					<HeadLine>
						<p>Nuestros Juegos</p>
					</HeadLine>
					{/* <OurGamesUl>
						{DUMMY_GAMES.map((games) => (
							<li key={games.title}>
								<GameItem gameData={games} />
							</li>
						))}
					</OurGamesUl> */}
					<GamesUl>
						{DUMMY_GAMES.map((games, index) => (
							<GamesLi key={games.title} index={index.toString()}>
								<GameItem gameData={games} />
							</GamesLi>
						))}
					</GamesUl>
				</BlockColumns>
			</GamesSection>
		</Fragment>
	)
}

export default Home

const NewsLetterUl = styled.ul`
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 125px 125px 125px 125px;
	grid-template-areas:
		'element0 element1'
		'element0 element2'
		'element0 element3'
		'element0 element4';
	grid-gap: 10px;
	height: 700px;

	@media only screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: 200px 200px 200px 200px 200px;
		grid-template-areas:
			'element0'
			'element1'
			'element2'
			'element3'
			'element4';
		grid-gap: 10px;
	}
`

const NewsLetterLi = styled.li<NewsLetterLiProps>`
	grid-area: ${(props) => 'element' + props.index};
	list-style: none;
	cursor: pointer;
	border: 2px solid transparent;
	border-radius: 15px;
	:hover {
		border: 2px solid wheat;
	}
`

/* const OurGamesUl = styled.ul`
	margin: 0;
	padding: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 15px;
	> li {
		list-style: none;
	}
	>li: nth-child(-n + 2) {
		width: 49%;
	}
	>li: nth-child(n + 3) {
		width: 32%;
	}
` */

const GamesUl = styled.ul`
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-auto-rows: 400px;
	grid-template-areas:
		'element0 element0 element0 element1 element1 element1'
		'element2 element2 element3 element3 element4 element4'
		'. . element5 element5 . .';
	grid-gap: 10px;

	@media only screen and (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-auto-rows: 200px;
		grid-template-areas:
			'element0'
			'element1'
			'element2'
			'element3'
			'element4'
			'element5';
		grid-gap: 10px;
	}
`

const GamesLi = styled.li<GamesLiProps>`
	grid-area: ${(props) => 'element' + props.index};
	list-style: none;
	border-radius: 15px;
`

const GamesSection = styled.section`
	height: 1400px;
	background-color: #1f1f1f;
`

const MainBannerSection = styled.section`
	background-image: url(/images/star_guardian_banner.jpg);
	width: 100%;
	object-fit: cover;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 900px;
`

const MainBannerInfo = styled.div`
	position: relative;
	left: 10%;
	top: 30%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	> p {
		display: flex;
		justify-content: center;
		text-align: center;
		width: 100%;
		margin: 20px 0;
		font-size: 24px;
		color: cornsilk;
	}
`

const NewsSection = styled.section`
	width: 100%;
	height: 900px;
	background: linear-gradient(199deg, rgb(35, 77, 54), rgb(0, 0, 0));

	@media only screen and (max-width: 800px) {
		height: 1300px;
	}
`

const BlockColumns = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 10%;
`

const HeadLine = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	> p {
		font-size: 40px;
		font-weight: bold;
		color: white;
	}
`

/* const RecentNewsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
` */

/* const RecentNewsFrontPage = styled.div`
	position: relative;
	background-image: url(/images/señor.png);
	flex: 50%;
	width: 100%;
	object-fit: cover;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 700px;
	border-radius: 25px;
	cursor: pointer;
	border: 2px solid transparent;
	> p {
		position: absolute;
		font-size: 26px;
		font-weight: bold;
		color: white;
		bottom: 0;
		margin-left: 35px;
	}
	:hover {
		border: 2px solid wheat;
	}
` */

/* const RecentNewsUl = styled.ul`
	height: 700px;
	display: flex;
	margin: 0;
	flex-direction: column;
	justify-content: space-between;
	flex: 50%;
	> li {
		list-style: none;
		cursor: pointer;
		border: 2px solid transparent;
		border-radius: 15px;
		:hover {
			border: 2px solid wheat;
		}
	}
` */
