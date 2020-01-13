import React from 'react'

// Dependencies
import clsx from 'clsx'

// Components
import styles from './Header.module.css'

const Header = () => {
	return (
		<div className={styles.wrapper}>
			 <div className={clsx(styles.content, 'centered-content')}>
			 	Resumade.ai
			 </div>
		</div>
	)
}

export default Header
