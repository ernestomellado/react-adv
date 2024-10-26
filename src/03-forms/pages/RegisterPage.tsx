import React, { MouseEventHandler, useState } from 'react'
import '../styles/styles.css'
import { useForm } from '../hooks/useForm';

export const  RegisterPage = () => {
    
   const {formData, change, resetForm , isValidEmail , name, email, password1, password2} = useForm({
        name:'',
        email:'',
        password1:'',
        password2:'', 
   }) 

const onSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
  event.preventDefault();
  console.log(formData);
}
  
  

  return (
    <div>
        <h1>RegisterPage</h1>
        <form noValidate onSubmit={(ev) =>onSubmit}>
            <input 
            name="name"
            type="text" 
            placeholder='Name'
            value={name}
            onChange={change}
            className={`${name.trim().length <= 0 && 'has-error'}`}

            />
            {name.trim().length <= 0 &&  <span>este campo es necesario</span> }
           
            <input 
            name="email"
            type="email" 
            placeholder='Email'
            value={email}
            onChange={change}
            className={`${!isValidEmail(email) && 'has-error'}`}
            />
            {!isValidEmail(email) && <span>el email no es valido</span>}


            <input 
            name="password1"
            type="password" 
            placeholder='PassWord'
            value={password1}
            onChange={change}
            
            />
            {password1.trim().length <= 0 &&  <span>este campo es necesario</span> }
            {password1.trim().length < 6 && password1.trim().length > 0 && <span>La contraseña tiene que tener 6 letras</span> }
              <input 
            name="password2"
            type="password" 
            placeholder='Repeat Password'
            value={password2}
            onChange={change}
            
            />
             {password2.trim().length <= 0 &&  <span>este campo es necesario</span> }
             {password1.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span> }

            <button type="submit">Create</button>
            <button onClick={resetForm}>Reset</button>
        </form>
    </div>
  )
}

export default RegisterPage