import fp from './forgotpassword.module.css'
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useForm } from "react-hook-form";


export default function ForgotPassword(){

    const {register, handleSubmit, formState: { errors } } = useForm();
    const [error,setError]=useState('')
    const url='https://ultrashop-api.techtrioz.xyz/auth/password/reset/'
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
           setError('Invalid Email')
        }
    };
return(
<div className={fp.logindiv}>
        <div className={fp.items}>
        <h3>Forgot Password</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        <FontAwesomeIcon icon={faEnvelope} /> <input type='text' placeholder='Email' {...register("email", { required: true })}></input><br/>
        {errors.email && <p style={{ color: "red" }}>
        *Email* is mandatory </p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input type={"submit"} className={fp.submit}/><br/><br/>
        </form>
           
        </div>
</div>

);



}