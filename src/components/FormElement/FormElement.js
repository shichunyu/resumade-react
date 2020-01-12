import React from 'react'

const FormElement = ( {element, index, onChange, name} ) => {

	const renderForm = () => {
		let elementHTML = null

		switch(element.type){
			case('input'):
				elementHTML = (
					<div id={`formElement-${index}`}>
						<div>
							<label>{element.labelText}</label>
						</div>
						<div>
							<input 
								{...element.config}
								value={element.value}
								onChange={(event) => onChange({event, element, index, name})} // passing as an object
							/>
						</div>
					</div>
				)
				break

			case('textarea'):
				elementHTML = (
					<div id={`formElement-${index}`}>
						<div>
							<label>{element.labelText}</label>
						</div>
						<div>
							<textarea
								{...element.config}
								value={element.value}
								onChange={(event) => onChange({event, element, index, name})} // passing as an object
							/>
						</div>
					</div>
				)
				break

				case('select'):
					elementHTML = (
						<div id={`formElement-${index}`}>
							<div>
								<label>{element.labelText}</label>
							</div> 
							<div>
								<select
									value={element.value}
									onChange={(event) => onChange({event, element, index, name})} // passing as an object
								>
									{ element.config.options.map((item,i) => (
										<option key={i} value={item.val}> {item.text} </option>
									)) }
								</select>
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
