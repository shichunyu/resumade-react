import React from 'react'

// COMPONENTS
import App from '../App/App'
import Header from '../Header/Header'

// STYLES
import styles from './Layout.module.css'

const Layout = () => {
	return (
		<div>
			<Header/>
			<App/>
			Footer
		</div>
	)
}

export default Layout
