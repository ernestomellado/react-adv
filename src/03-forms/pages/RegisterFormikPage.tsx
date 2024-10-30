import React, { MouseEventHandler, useState } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm';
import { FormikErrors, useFormik, Formik, Field, Form, ErrorMessage, FormikHelpers, FormikValues } from 'formik'
import * as Yup from 'yup'
import { fireEvent } from '@testing-library/react'
import { MyTextInput } from '../Components/MyTextInput';

export const  RegisterFormikPage = () => {
    
  return (
    <div>
      <Formik initialValues={{
            name: '',
            emial:'', 
            password1:'',
            passowrd2:''
        }}
        onSubmit={(values)=>{
            console.log(values)
        }}
        validationSchema={
            Yup.object({
                name: Yup.string()
                                .max(15, 'Debe de tener 15 caracteres o menos')
                                .min(2, "debe de tener minimo 2 caracteres")
                                .required('Requerido'),
                email: Yup.string()
                                .email('Formato de email no valido')
                                .required('Requerido'),
                password1: Yup.string()
                                .required('La contraseña es obligatoria')
                                .min(8, 'La contraseña debe tener al menos 8 caracteres')
                                .matches(/[A-Z]/, 'La contraseña debe contener al menos una letra mayúscula')
                                .matches(/[a-z]/, 'La contraseña debe contener al menos una letra minúscula')
                                .matches(/\d/, 'La contraseña debe contener al menos un número')
                                .matches(/[@$!%*?&]/, 'La contraseña debe contener al menos un carácter especial (@$!%*?&)'), 
                password2: Yup.string()     
                                .oneOf([Yup.ref('password1')], 'Las contraseñas deben coincidir')
                                .required('Confirma tu contraseña'),   
            })  


        }>

            {(formik) =>(
                 <Form>
                    <MyTextInput 
                        label="Name" 
                        name="name"
                        placeholder="Name..."
                        />
                    <MyTextInput 
                        label="Email" 
                        name="email"
                        placeholder="Email..."
                        />
                    <MyTextInput 
                        label="Password" 
                        name="password1"
                        type="password"
                        placeholder="Password..."
                        />
                    <MyTextInput 
                        label="Repeat Password" 
                        name="password2"
                        type="password"
                        placeholder="Repeat Password..."
                        />
                 <button type='submit'>Submit</button>
                 </Form>
            )}
            
        </Formik>
   
    </div>
  )
}

export default RegisterFormikPage