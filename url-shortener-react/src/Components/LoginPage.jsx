import React from 'react'
import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import TextField from './TextField';
import toast from 'react-hot-toast';
import api from '../api/api';
import { useStoreContext } from '../ContextApi/ContextApi';


const LoginPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const { setToken } = useStoreContext();

    const location = useLocation();
    const guestCredentials = location.state?.guest || null;

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: guestCredentials?.username || "",
            password: guestCredentials?.password || "",
        },
        mode: "onTouched",
    });
    const loginHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post(
                "/api/auth/public/login",
                data
            );
            console.log(response.token);
            setToken(response.token);
            localStorage.setItem("JWT_TOKEN", JSON.stringify(response.token));
            toast.success("Login Successful!")
            reset();
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
            toast.error("Login Failed!")
        } finally {
            setLoader(false);
        }
    }
    return (
        <div
            className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
            <form onSubmit={handleSubmit(loginHandler)}
                className="sm:w-[450px] w-[360px]  shadow-md shadow-slate-400 py-5 sm:px-5 px-2 rounded-md">
                <h1 className="text-center font-serif text-blue-400 font-bold lg:text-3xl text-2xl">
                    Login Here
                </h1>

                <hr className='mt-2 mb-5 text-slate-300' />

                <div className="flex flex-col gap-3">
                    <TextField
                        label="UserName"
                        required
                        id="username"
                        type="text"
                        message="*Username is required"
                        placeholder="Type your username"
                        register={register}
                        errors={errors}
                    />

                    <TextField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        placeholder="Type your password"
                        register={register}
                        min={6}
                        errors={errors}
                    />
                </div>

                <button
                    disabled={loader}
                    type='submit'
                    className='border font-bold text-white bg-blue-300 w-full py-2 transition-colors duration-100 rounded-sm my-3 cursor-pointer'>
                    {loader ? "Loading..." : "Login"}
                </button>
                <p className='text-center text-sm text-slate-700 mt-6'>
                    Don't have an account?
                    <Link
                        className='font-semibold underline hover:text-black'
                        to="/register">
                        <span className='text-btnColor'> SignUp</span>
                    </Link>
                </p>
                {guestCredentials && (
                    <p className="text-center text-sm text-orange-600 font-medium mt-2">
                        You're logged in as a guest.
                        Your shortened URLs are public. To manage your URLs privately, register or log in to your account.
                    </p>
                )}
            </form>

        </div>
    )
}

export default LoginPage

