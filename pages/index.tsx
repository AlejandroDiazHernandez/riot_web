import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Fragment } from 'react'
import AllButtons from './components/buttons/All_buttons'
import RecentNewLiItem from './components/recent_new_list_item/Recent_new_li_item'

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
				<NewsInfo>
					<NewsHeadline>
						<p>Actualidad</p>
						<AllButtons secondary>Ver Todo</AllButtons>
					</NewsHeadline>
					<RecentNewsContainer>
						<RecentNewsFrontPage>
							<p>NoticiasPrime</p>
						</RecentNewsFrontPage>
						<RecentNewsUl>
							{DUMMY.map((recentNew) => (
								<li key={recentNew.title}>
									<RecentNewLiItem newsData={recentNew} />
								</li>
							))}
						</RecentNewsUl>
					</RecentNewsContainer>
				</NewsInfo>
			</NewsSection>
		</Fragment>
	)
}

export default Home

const DUMMY = [
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
`

const NewsInfo = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 10%;
`

const NewsHeadline = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	> p {
		font-size: 40px;
		font-weight: bold;
		color: white;
	}
`

const RecentNewsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const RecentNewsFrontPage = styled.div`
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
`

const RecentNewsUl = styled.ul`
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
`
