import { Fragment } from 'react'
import Footer from './Footer'
import MainLayout from './Main_layout'

type Props = {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Fragment>
			<MainLayout />
			{children}
			<Footer />
		</Fragment>
	)
}

export default Layout
