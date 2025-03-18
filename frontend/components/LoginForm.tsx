import React, { useState } from 'react';
import { InputLabel } from './InputLabel';
import { PrimaryButton } from './buttons/PrimaryButton';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import {useRouter} from 'next/navigation';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const router = useRouter();
    return (
    <div className='flex flex-col border rounded-xl p-10 w-[70%] gap-5'>
        <InputLabel label_name='Email' type="email" name='email' value='' field={email} onChange={(e)=>{
            setEmail(e.target.value)
        }} />
        <InputLabel label_name='Password' type="password" name='password' value='' field={password} onChange={(e)=>{
            setPassword(e.target.value)
        }} />
        <PrimaryButton onClick={ async () =>{
            const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
                username:email,
                password:password                
            });
            await localStorage.setItem("token", res.data.token);
            router.push('/dashboard');
        }} size='big'> Login</PrimaryButton>
    </div>
  );
};

export default LoginForm ;
