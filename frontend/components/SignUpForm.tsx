import React, { useState } from 'react';
import { InputLabel } from './InputLabel';
import { PrimaryButton } from './buttons/PrimaryButton';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { BACKEND_URL } from '../config';

const SignUpForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    return (
    <div className='flex flex-col border rounded-xl p-10 w-[70%] gap-5'>
        <InputLabel label_name='Name' type="text" name='name' field={name}   value='' onChange={(e)=>{
            setName(e.target.value)
        }} />
        <InputLabel label_name='Email' type="email" name='email' field={email}  value='' onChange={(e)=>{
            setEmail(e.target.value) }} />
        <InputLabel label_name='Password' type="password" name='password' field={password}  value='' onChange={(e)=>{
            setPassword(e.target.value)
        }} />
        <PrimaryButton onClick={ () => {
            axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
                name:name,
                username:email,
                password:password
            });
            router.push('/login'); 
}} size='big'> Signup</PrimaryButton>
    </div>
  );
};

export default SignUpForm;
