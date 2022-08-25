import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Image from 'next/image'
import BlueButton from './components/buttons/Blue_button'

const Home: NextPage = () => {
	return (
		<MainBanner>
			<MainBannerInfo>
				<Image src={'/images/star_guardian.webp'} width={750} height={125} />
				<p>Adentrate en este nuevo mundo</p>
				<p>
					Adentrate en este nuevo mundo,Adentrate en este nuevo mundo,Adentrate
					en este nuevo mundo,Adentrate en este nuevo mundo
				</p>
				<BlueButton>Descúbrelo!</BlueButton>
			</MainBannerInfo>
		</MainBanner>
	)
}

export default Home

const MainBanner = styled.section`
	background-image: url(/images/star_guardian_banner.jpg);
	height: 100%;
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
		width: 100%;
		margin: 20px 0;
		font-size: 24px;
		color: cornsilk;
	}
`
