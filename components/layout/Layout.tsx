import { Fragment } from 'react'
import Meta from '../Meta'
import Footer from './Footer'
import MainLayout from './Main_layout'

type Props = {
	children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<Fragment>
			<Meta />
			<MainLayout />
			<main>{children}</main>
			<Footer />
		</Fragment>
	)
}

export default Layout
