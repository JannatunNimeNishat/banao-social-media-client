
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {  useNavigate } from 'react-router-dom';

const ForgetPassword = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState()

    const navigate = useNavigate()


    const onSubmit = (data) => {
        console.log(data);
        setLoginError('')
        fetch('http://localhost:5000/forget-password', {
            method: 'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount === 1){
                console.log(data);
                navigate('/login')
            }
            else{
                setLoginError(data.message)
            }
        })
    }

    return (
        <>
            <div className='my-container mt-10  min-h-[80vh]  flex justify-center items-center  '>
                <form onSubmit={handleSubmit(onSubmit)} className='  lg:w-[450px] px-10 py-5 text-center border border-yellow-500 mx-auto'>
       
                    <h3 className='text-3xl  font-bold mt-5'>Find your account</h3>

                    <input className='border-b-2 border-yellow-500  w-full mt-10 px-2'
                        type="email"
                        name="email"
                        placeholder='Enter your previously registered email'
                        {...register('email', { required: true })}

                    />
                    {errors.email && <p className="text-red-500">Email is Required</p>}
                    <br />

                    <input className='border-b-2 border-yellow-500  w-full mt-8 px-2'
                        type="password"
                        name="password"
                        placeholder='Enter your new password'
                        required
                        {...register('password', { required: true })}
                    />
                    
                    <input className='mt-8 my-btn  w-1/3 cursor-pointer' type="submit" value="Submit" />

                    {
                        loginError && <p className='mt-4 text-red-700 font-semibold text-center'>{loginError}</p>
                    }

                </form>
            </div>
        </>
    );
};

export default ForgetPassword;