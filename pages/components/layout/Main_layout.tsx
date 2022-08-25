import styled from '@emotion/styled'
import RiotFist from '../svg/Riot_fist'

const MainLayout: React.FC = () => {
	return (
		<NavBar>
			<Ul>
				<li>
					<RiotFist width={25} height={25} />
				</li>
				<li>
					<p>Quién soy</p>
				</li>
				<li>
					<p>Noticias</p>
				</li>
			</Ul>
			<Ul>
				<li>
					<p>Añadir buscador</p>
				</li>
				<li>
					<p>Añadir Log-in</p>
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
		> p {
			font-size: 20px;
		}
	}
`
