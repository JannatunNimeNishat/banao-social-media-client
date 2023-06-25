
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loginError, setLoginError] = useState()

    const navigate = useNavigate()


    const onSubmit = (data) => {
        console.log(data);
        fetch('http://localhost:5000/signIn', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            setLoginError('')
            if(data.email){
                console.log(data);
                localStorage.setItem('logged-user', JSON.stringify(data.email))
                navigate('/')
            }
            else{
                setLoginError(data.message)
            }
        })
    }


    return (
        <div className='my-container mt-10  min-h-[80vh]  flex justify-center items-center  '>
            <form onSubmit={handleSubmit(onSubmit)} className='  lg:w-[450px] px-10 py-5 text-center border border-yellow-500 mx-auto'>
                <h3 className='text-3xl  font-bold mt-5'>Please Login</h3>

                <input className='border-b-2 border-yellow-500  w-full mt-10 px-2'
                    type="email"
                    name="email"
                    placeholder='please enter your email'
                    {...register('email', { required: true })}

                />
                {errors.email && <p className="text-red-500">Name is Required</p>}
                <br />

                <input className='border-b-2 border-yellow-500  w-full mt-8 px-2'
                    type="password"
                    name="password"
                    placeholder='please enter your password'
                    required
                    {...register('password', { required: true })}
                />
               <p className='text-left mt-1'><span className='primary-color '>
                    <Link to='/forgetPassword'><small className='text-yellow-500 font-semibold'>Forgotten password ?</small></Link>
                </span></p>

                <input className='mt-8 my-btn  w-1/3 cursor-pointer' type="submit" value="Login" />

                {
                     loginError && <p className='mt-4 text-red-700 font-semibold text-center'>{loginError}</p>
                }


                <p className='mt-4'><small>Don't have an account ? <span className='primary-color font-semibold'>
                    <Link to='/register'>register</Link>
                </span></small></p>


            </form>
        </div>
    );
};

export default Login;