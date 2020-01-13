import React from 'react'

// Dependencies
import clsx from 'clsx'

// External Components
import Select from 'react-select'

// STYLES
import styles from './FormElement.module.css'

const FormElement = ( {element, index, onChange, name} ) => {

	const selectStyles = {
		container: (base) => ({
			...base,
			flex: 1,
			height: '2rem',
			'min-height': '2rem'
		}),
		valueContainer: (base) => ({
			...base,
			'padding': '0px 1rem 0px 1rem',
			height: '2rem'
		}),
		placeholder: (base) => ({
			...base,
			'font-size': '1rem'
		})
	}

	const renderForm = () => {
		let elementHTML = null

		switch(element.type){
			case('input'):
				elementHTML = (
					<div id={`formElement-${index}`}>
						<div className={styles.label}>
							<label>{element.labelText}</label>
						</div>
						<div className={clsx(styles.field, "flex")}>
							<input 
								{...element.config}
								value={element.value}
								onChange={(event) => onChange({event, element, index, name})}
							/>
						</div>
					</div>
				)
				break
				
				case('select'):
					elementHTML = (
						<div id={`formElement-${index}`}>
								<div className={styles.label}>
									<label>{element.labelText}</label>
								</div> 
								<div className={clsx(styles.field, "flex", "select-field")}>
									<Select
										onChange={(event) => onChange({event, element, index, name})}
										options = {element.config.options}
										styles={selectStyles}
										classNamePrefix="select"
									>
									</Select>
								</div>
							</div>
					)
					break
				
				case('textarea'):
					elementHTML = (
						<div id={`formElement-${index}`}>
							<div className={styles.label}>
								<label>{element.labelText}</label>
							</div>
							<div className={clsx(styles.field, "flex")}>
								<textarea
									{...element.config}
									value={element.value}
									onChange={(event) => onChange({event, element, index, name})}
								/>
							</div>
						</div>
					)
					break

			default:
					elementHTML = ('update this!')
				break
		}
		return elementHTML
	}


	return (
		<div>
			{renderForm()}
		</div>
	)
}

export default FormElement
