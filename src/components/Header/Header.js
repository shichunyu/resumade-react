import React from 'react'

// Dependencies
import clsx from 'clsx'

// Components
import styles from './Header.module.css'

const Header = () => {
	return (
		<div className={styles.wrapper}>
			 <div className={clsx(styles.content, 'centered-content')}>
			 	<div className={styles.left}>
					Resumade.ai
				</div>
				<div className={styles.right}>
					About
				</div>
			 </div>
		</div>
	)
}

export default Header
