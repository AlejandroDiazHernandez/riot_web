import styled from '@emotion/styled'

const Footer: React.FC = () => {
	return (
		<PageFooter>
			<a href="#top">Volver arriba</a>
		</PageFooter>
	)
}

export default Footer

const PageFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(199deg, rgb(35, 77, 54), rgb(0, 0, 0));
	height: 100px;
	> a,
	a:focus,
	a:active {
		border: 2px solid darkgoldenrod;
		padding: 5px;
		text-decoration: none;
		color: gray;
		font-size: 24px;
	}
	a:hover {
		text-decoration: none;
		box-shadow: 0 0 9px 3px gold;
		background-color: goldenrod;
		color: white;
	}
`
