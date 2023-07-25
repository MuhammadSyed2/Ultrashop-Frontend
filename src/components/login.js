import login from './login.module.css'
import {Link} from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faKey } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";
import { useState } from 'react';


export default function Loginform(){

    const {register, handleSubmit, formState: { errors } } = useForm();
    const [error,setError]=useState('')
    const url='https://ultrashop-api.techtrioz.xyz/auth/login/'
    const onSubmit = async (data) => {
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
           setError('Invalid usename or email or password')
        }
    };
return(
<div className={login.logindiv}>
        <div className={login.items}>
        <h3>Login Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <FontAwesomeIcon icon={faUser} /> <input type='text' placeholder='Username' {...register("username", { required: true })}/><br/>
        {errors.username && <p style={{ color: "red"}}>
        *Username* is mandatory </p>}
        <FontAwesomeIcon icon={faEnvelope} /> <input type='email' placeholder='Email' {...register("email", { required: true })}/><br/>
        {errors.email && <p style={{ color: "red" }}>
        *Email* is mandatory </p>}
        <FontAwesomeIcon icon={faKey} /> <input type='password' placeholder='Password' {...register("password", { required: true })}/><br/>
        <input type={"submit"} className={login.submit}/><br/><br/>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
            <Link to='/register' className={login.register}>Register</Link><br/>
            <Link to='/forgotpassword' className={login.forgotpassword}>Forgot Password</Link><br/><br/><br/>
        </div>
        
</div>

);



}