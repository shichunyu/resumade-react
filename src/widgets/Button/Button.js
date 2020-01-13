import React from 'react'

// Styles
import styles from './Button.module.css'

const Button = ({children, onClick}) => {
	return (
		<div className="flex">
          <button onClick={onClick}>{children}</button>
    </div>
	)
}

export default Button
