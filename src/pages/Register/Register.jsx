import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useState } from "react";
import Swal from "sweetalert2";

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [regiterEroor, setRegisterError] = useState()
    const navigate = useNavigate()
    const onSubmit = (data) => {


        // register a user

        fetch('http://localhost:5000/signUp', {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            setRegisterError('')
            if(data.insertedId){
                navigate('/')
            }
            else{
                setRegisterError(data.message)
            }
        })

    }
    return (
        <div className='my-container mt-10  min-h-[80vh]  flex justify-center items-center  '>
            <form onSubmit={handleSubmit(onSubmit)} className='  lg:w-[450px] px-10 py-5 text-center border border-yellow-500 mx-auto'>
                <h3 className='text-3xl  font-bold mt-5'>Please Register</h3>

                <input className='border-b-2 border-yellow-500  w-full mt-10 px-2'
                    type="text"
                    name="name"
                    placeholder='please enter your name'

                    

                    {...register('name', { required: true })}
                />
                {errors.name && <p className="text-red-500">Name is Required</p>}
                <br />
                <input className='border-b-2 border-yellow-500  w-full mt-10 px-2'
                    type="email"
                    name="email"
                    placeholder='please enter your email'

                    
                    {...register('email', { required: true })}
                />
                {errors.email && <p className="text-red-500">Email is Required</p>}
                <br />

                <input className='border-b-2 border-yellow-500  w-full mt-8 px-2'
                    type="password"
                    name="password"
                    placeholder='please enter your password'
                    {...register('password', {
                        required: true,
                        minLength: 6,
                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                    })}
                />
                {/* password error */}
                {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be 6 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one upper case and one special character</p>}
                
                {
                    register && <p className="text-red-500">{regiterEroor}</p>
                }


                <input className='mt-8 my-btn  w-1/3 cursor-pointer' type="submit" value="Register" />

               

                <p className='mt-4'><small>Already have an account ? please <span className='primary-color font-semibold'>
                    <Link to='/login'>Login</Link>
                </span></small></p>


            </form>
        </div>
    );
};

export default Register;