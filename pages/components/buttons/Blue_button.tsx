import styled from '@emotion/styled'

type Props = {
	children: React.ReactNode
}

const BlueButton: React.FC<Props> = ({ children }) => {
	return <BlueButtonStyle type="button">{children}</BlueButtonStyle>
}

export default BlueButton

const BlueButtonStyle = styled.button`
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
