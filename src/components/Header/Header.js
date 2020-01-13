import React from 'react'

// Components
import styles from './Header.module.css'

const Header = () => {
	return (
		<div className={styles.wrapper}>
			 <div className={styles.content, 'centered-content'}>
			 	Resumade.ai
			 </div>
		</div>
	)
}

export default Header
