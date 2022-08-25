import styled from '@emotion/styled'

type Props = {
	children: React.ReactNode
	secondary?: boolean
}

const AllButtons: React.FC<Props> = ({ children, secondary }) => {
	if (secondary) {
		return <SecondaryButtonBlack type="button">{children}</SecondaryButtonBlack>
	}

	return <MainButtonBlue type="button">{children}</MainButtonBlue>
}

export default AllButtons

const MainButtonBlue = styled.button`
	background-color: deepskyblue;
	padding: 15px;
	color: white;
	font-size: 20px;
	font-weight: bold;
	border-radius: 20px;
	:hover {
		color: purple;
		box-shadow: 0 0 40px #b74db2;
	}
`

const SecondaryButtonBlack = styled.button`
	background-color: black;
	padding: 5px;
	color: white;
	font-size: 16px;
	font-weight: bold;
	border-radius: 10px;
	:hover {
		box-shadow: 0 0 20px white;
	}
`
