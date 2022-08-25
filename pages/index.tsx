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
								<RecentNewLiItem key={recentNew.text} newsData={recentNew} />
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
		text: 'davi1dow',
		image: '/images/interface.png',
	},
	{
		text: 'davi2dow',
		image: '/images/poros.png',
	},
	{
		text: 'davi3dow',
		image: '/images/señora.png',
	},
	{
		text: 'davi4dow',
		image: '/images/riot_oride.png',
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
	background-image: url(/images/señor.png);
	flex: 50%;
	width: 100%;
	object-fit: cover;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 700px;
`

const RecentNewsUl = styled.ul`
	flex: 50%;
`
