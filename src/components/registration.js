import './register.css'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import { useState } from 'react';

export default function Registration(){
    const {register, handleSubmit, formState: { errors } } = useForm();
    const [error,setError]=useState('')
    const url='https://ultrashop-api.techtrioz.xyz/auth/registration/'
    const onSubmit = async (data) => {
        console.log(data)
        try{
            const response=await axios.post(url,data, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              setError('')
            console.log(response.data)
        }
        catch(error){
           setError('Invalid Username or Email or Password')
        }
    };

    return(
<div className='regdiv'>
        <div className='items'>
        <h3>Register Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <FontAwesomeIcon icon={faUser} /> <input type='text' placeholder='Username' {...register("username", { required: true })}></input><br/>
        {errors.username && <p style={{ color: "red" }}>
        *Username* is mandatory </p>}
        <FontAwesomeIcon icon={faEnvelope} /> <input type='text' placeholder='Email' {...register("email", { required: true })}></input><br/>
        {errors.email && <p style={{ color: "red" }}>
        *Email* is mandatory </p>}
        <FontAwesomeIcon icon={faKey} /> <input type='password' placeholder='Password' {...register("password1", { required: true })}></input><br/>
        {errors.password1 && <p style={{ color: "red" }}>
        *Password* is mandatory </p>}
        <FontAwesomeIcon icon={faKey} /> <input type='password' placeholder='Confirm Password' {...register("password2", { required: true })}></input><br/>
        {errors.password2 && <p style={{ color: "red" }}>
        *Retype Password* is mandatory </p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input type={"submit"} className='submit' value={'Register'}/><br/><br/>
        </form>
        </div>
</div>

    );
}