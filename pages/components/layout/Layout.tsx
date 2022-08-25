import { Fragment } from 'react'
import MainLayout from './Main_layout'

type Props = {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Fragment>
			<MainLayout />
			{children}
		</Fragment>
	)
}

export default Layout
