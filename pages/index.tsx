import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Image from 'next/image'
import { Fragment } from 'react'
import MainButton from './components/buttons/Main_button'

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
					<MainButton>Descúbrelo!</MainButton>
				</MainBannerInfo>
			</MainBannerSection>
			<NewsSection>
				<NewsInfo>
					<NewsHeadline>
						<p>Actualidad</p>
						<MainButton>Ver Todo</MainButton>
					</NewsHeadline>
					<RecentNews>
						<div>Main New</div>
						<ul>
							<li>1 subnew</li>
							<li>2 subnew</li>
							<li>3 subnew</li>
							<li>4 subnew</li>
						</ul>
					</RecentNews>
				</NewsInfo>
			</NewsSection>
		</Fragment>
	)
}

export default Home

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
	background-color: rgba(11, 196, 226, 0.2);
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
`

const RecentNews = styled.div`
	display: flex;
	align-items: center;
`
