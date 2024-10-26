import { FormikErrors, useFormik, Formik, Field, Form, ErrorMessage, FormikHelpers, FormikValues } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import { fireEvent } from '@testing-library/react'

const FormikComponents = () => {

  return (
    <div>
        <h1>Formik Components Page</h1>

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
                 <label htmlFor="firstName"> First Name</label>
                <Field name="firstName" type="text"></Field>
                <ErrorMessage name="firstName" component="span"></ErrorMessage>
    
                 
                 <label htmlFor="lastName"> Last Name</label>
                 <Field name="lastName" type="text"></Field>
                 <ErrorMessage name="lastName" component="span"></ErrorMessage>
         
                  
                 <label htmlFor="email"> Email Address</label>
                 <Field name="email" type="text"></Field>
                 <ErrorMessage name="email" component="span"></ErrorMessage>


                 <label htmlFor="jobType"> Job Type</label>
                 <Field name="jobType" as="select">
                    <option value="">Pick Something</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="it-senior">it-senior</option>
                    <option value="it-jr">it-jr</option>
                 </Field>
                 <ErrorMessage name="jobType" component="span"></ErrorMessage>
         

                 <label> 
                 <Field name="terms" type="checkbox"></Field>
                    Terms and conditions</label>
              
                 <ErrorMessage name="terms" component="span"></ErrorMessage>

              
                 
                 <button type='submit'>Submit</button>
                 </Form>
            )}
            
        </Formik>

       
    </div>
  )
}

export default FormikComponents