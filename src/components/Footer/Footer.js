import React from 'react'

// Dependencies
import clsx from 'clsx'

// Styles
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<div className={clsx('centered-content', styles.footer)}>
		© 2019 Resumade
		</div>
	)
}

export default Footer
