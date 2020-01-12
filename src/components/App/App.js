import React, { useState } from 'react';

// COMPONENTS
import GROUP from '../../data/group.json'
import NEWGROUP from '../../data/newGroup.json'
import FIELDS from '../../data/fields.json'
import FormElement from '../FormElement/FormElement'

// STYLES
import './App.css';

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

  const handleStaticFormChange = (element) => {
    const newStaticFormState = staticFormState

    console.log(element)
    console.log(element.event.target.value)
    console.log(element.index)

    newStaticFormState[element.index].value = element.event.target.value

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

  const handleGroupChange = (element) => {
    const newGroupState = deepCopy(groupState)

    console.log(element)
    console.log(element.event.target.value)
    console.log(element.index)

    newGroupState[element.index][element.name].value = element.event.target.value

    console.log(newGroupState)

    setGroupState([...newGroupState])

    console.log(groupState)
  }
  
  return (
   <div className="wrapper">
    <h1>About Yourself</h1>
    {
      staticFormState.map( (formItem, index) => (
        <FormElement
          key={index}
          index={index}
          element={formItem}
          onChange={handleStaticFormChange}
        />
      ))
    }

    <h1>Your Job Experience</h1>
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
        </div>
      ))
    }

    <button onClick={addNew}>Add New</button>
     
   </div>
  );
}

export default App;
