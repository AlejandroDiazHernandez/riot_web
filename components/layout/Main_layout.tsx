import styled from '@emotion/styled'
import Link from 'next/link'
import Search from '../Search'
import RiotFist from '../svg/Riot_fist'

const MainLayout: React.FC = () => {
	return (
		<NavBar id="top">
			<Ul>
				<Link href="/">
					<li>
						<RiotFist width={25} height={25} />
					</li>
				</Link>
				<Link href="/about_me/alejandro_diaz_hernandez">
					<li>
						<p>Quién soy</p>
					</li>
				</Link>
				<Link href="/news">
					<li>
						<p>Noticias</p>
					</li>
				</Link>
			</Ul>
			<Ul>
				<li>
					<Search />
				</li>
			</Ul>
		</NavBar>
	)
}

export default MainLayout

const NavBar = styled.nav`
	display: flex;
	justify-items: center;
	justify-content: space-between;
	width: 100%;
	height: 80px;
	background-color: black;
	color: white;
`

const Ul = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	> li {
		margin: 0 25px;
		cursor: pointer;
		> p {
			font-size: 20px;
		}
	}
`
