
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);

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
              

                <input className='mt-8 my-btn  w-1/3 cursor-pointer' type="submit" value="Login" />

                {
                    // loginError && <p className='mt-4 text-red-700 font-semibold text-center'>{loginError}</p>
                }


                <p className='mt-4'><small>Don't have an account ? <span className='primary-color font-semibold'>
                    <Link to='/register'>register</Link>
                </span></small></p>


            </form>
        </div>
    );
};

export default Login;