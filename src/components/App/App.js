import React, { useState } from 'react';

// COMPONENTS
import GROUP from '../../data/group.json'
import NEWGROUP from '../../data/newGroup.json'
import FIELDS from '../../data/fields.json'

// Widgets
import FormElement from '../../widgets/FormElement/FormElement'
import Button from '../../widgets/Button/Button'

// Dependencies
import clsx from 'clsx'

// STYLES
import styles from './App.module.css'

function App() {
  const [staticFormState, setStaticFormState] = useState ([
    ...FIELDS
  ])

  const [groupState, setGroupState] = useState ([
		...GROUP
  ])

  const addNew = () => {
    const newGroupCopy = [...NEWGROUP]
    const newGroup = [...groupState, ...newGroupCopy] // why does the value always get saved??
    setGroupState(newGroup)
    console.log(NEWGROUP)
    console.log(newGroup)
  }

  const handleStaticFormChange = (formData) => {
    console.log(formData)
    const newStaticFormState = staticFormState

    const value =  formData.element.type === 'input' ? formData.event.target.value : formData.event.value
    
    console.log(value)
    console.log(formData.index)

    newStaticFormState[formData.index].value = value

    console.log(newStaticFormState)

    setStaticFormState([...newStaticFormState])
  }

  // Deep Copy Function from https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089
  const deepCopy = inObject => {
    let outObject, value, key
  
    if(typeof inObject !== "object" || inObject === null) {
      return inObject // Return the value if inObject is not an object
    }
  
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {}
  
    for (key in inObject) {
      value = inObject[key]
  
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = (typeof value === "object" && value !== null) ? deepCopy(value) : value
    }
    
    return outObject
  }

  const handleGroupChange = (formData) => {
    const newGroupState = deepCopy(groupState)

    console.log(formData)
    console.log(formData.event.target.value)
    console.log(formData.index)

    newGroupState[formData.index][formData.name].value = formData.event.target.value

    console.log(newGroupState)

    setGroupState([...newGroupState])

    console.log(groupState)
  }
  
  return (
   <div>

    <div className={clsx(styles.hero,"section-padding")}>
      <div className="centered-content">
        <h1>Welcome to Resumade</h1> 
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias possimus rem quibusdam qui, officiis nobis repellendus molestiae a porro eius, odit mollitia ipsa optio dolore numquam, deleniti saepe voluptate maiores.
      </div>
    </div>

    <div className={clsx("centered-content","section-padding")}>
      <div className="contact-info">
        <h1>Contact Information</h1>
        {
          staticFormState.map( (formItem, index) => (
            <FormElement
              name={formItem.config.name}
              key={index}
              index={index}
              element={formItem}
              onChange={handleStaticFormChange}
            />
          ))
        }
      </div>

      <div className="job-experience">
        <h1>Relevant Skills & Job Experience</h1>
        {
          groupState.map( (groupItem, index) => (
            
            <div key={index} id={`group-${index}`}>
              <FormElement
                name='jobDesc'
                index={index}
                element={groupItem.jobDesc}
                onChange={handleGroupChange}
              />
              <FormElement
                name='yourExp'
                index={index}
                element={groupItem.yourExp}
                onChange={handleGroupChange}
              />
              <hr/>
            </div>
          ))
        }
        <Button onClick={addNew}>Add Experience</Button>
      </div>

    
    </div>
     
   </div>
  );
}

export default App;
