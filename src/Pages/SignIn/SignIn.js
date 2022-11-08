import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider';

const SignIn = () => {
    const { login, loginwithProvider } = useContext(AuthContext);
    // error state
    const [error, setError] = useState(null)
    // email password login event handler
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(response => {
                const user = response.user;
                console.log(user);
                form.reset();
            }).catch(error => setError(error.message))
    }
    // google login
    const handlGoogleLogin = () => {
        const googleProvider = new GoogleAuthProvider();

        loginwithProvider(googleProvider)
            .then(response => {
                const user = response.user;
                console.log(user);
            }).catch(error => console.log(error))
    }
    return (
        <div>
            <div className="bg-base-200 py-8">
                <div className=" lg:w-[40%] mx-auto w-[90%] ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-8 text-center">Sign in</h1>
                    </div>
                    <form onSubmit={handleLogin} className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to="/forgot" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className='text-center text-xl'>
                                {/* custom error message */}
                                <p className='text-red-700'>
                                    {error === "Firebase: Error (auth/wrong-password)." && "Email & Password does not match"}
                                    {
                                        error === "Firebase: Error (auth/user-not-found)." && "No account found"
                                    }
                                </p>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign in</button>
                            </div>
                            <p className='text-center text-xl font-semibold mt-4'>Don't have an account ? <Link to="/signup" className='text-primary'>Sign Up</Link> </p>
                        </div>
                        <div className='text-center'>
                            <p className='font-bold mb-4'>Or Sign In with </p>
                            <button onClick={handlGoogleLogin} type='button' className='mb-4'>
                                <FaGoogle className='text-3xl text-[#4285F4]'></FaGoogle>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;