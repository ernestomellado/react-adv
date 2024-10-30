import React from 'react'
import formJson from '../data/custom-form.json'
import { Formik, Form } from 'formik'
import { MyTextInput } from '../Components/MyTextInput'
import '../styles/styles.css'


const initialValues:{[key:string]:any} ={};

for (const input of formJson){
  initialValues[input.name] = input.value 
}

const DynamicForm = () => {

  return (
    <div>
    <h1>Dynamic Form</h1>
    <Formik
      initialValues={initialValues}
      onSubmit={(values)=>{
        console.log(values)
      }}
    >
     {(formik) => (
      <Form noValidate>
        {formJson.map(({type, name, label, placeholder})=>{
          return <MyTextInput key={name} type={(type as any)} name={name} label={label} placeholder={placeholder}/>
        })}
        <button type="submit">Submit</button>
      </Form>
      
     )}
    </Formik>
    </div>
  )
}

export default DynamicForm