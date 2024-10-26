import { FormikErrors, useFormik, Formik, Field, Form, ErrorMessage, FormikHelpers, FormikValues } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { fireEvent } from '@testing-library/react'
import { MyTextInput } from '../Components/MyTextInput'
import { MySelect } from '../Components/MySelect'
import { MyCheckbox } from '../Components/MyCheckbox'

const FormikAbstraction = () => {


  return (
    <div>
        <h1>Formik Abstraction Page</h1>

        <Formik initialValues={{
            firstName: '',
            lastName:'',
            email:'',
            terms: false,
            jobType: ''
        }}
        onSubmit={(values)=>{
            console.log(values)
        }}
        validationSchema={
            Yup.object({
                firstName: Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .required('Requerido'),
                lastName: Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .required('Requerido'),
                email:     Yup.string()
                                .email('Invalid email address') 
                                .required('Email is required'),   
                terms:     Yup.boolean()
                                .oneOf([true], 'Debe de aceptar las codiciones'),      
                                           
                jobType: Yup.string()
                            .notOneOf(['it-jr'], 'No es una opcion permitida')
                            .required('Requerido')                
            })  


        }>

            {(formik) =>(
                 <Form>
                    <MyTextInput 
                        label="First Name" 
                        name="firstName"
                        placeholder="Name..."
                        >

                    </MyTextInput>
                    <MyTextInput 
                        label="lastName" 
                        name="lastName"
                        placeholder="last Name..."
                        >

                    </MyTextInput>
                    <MyTextInput 
                        label="email" 
                        name="email"
                        placeholder="emial..."
                        >

                    </MyTextInput>

                   
                 <MySelect name="jobType" label="Job Type">
                    <option value="">Pick Something</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="it-senior">it-senior</option>
                    <option value="it-jr">it-jr</option>
                 </MySelect>
         
                <MyCheckbox label="Terms and condition" name="terms">

                </MyCheckbox>
             
                 
                 <button type='submit'>Submit</button>
                 </Form>
            )}
            
        </Formik>

       
    </div>
  )
}

export default FormikAbstraction