import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div>
            <div className="bg-base-200 py-8">
                <div className=" lg:w-[40%] mx-auto w-[90%] ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-8 text-center">Sign in</h1>
                    </div>
                    <form className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign in</button>
                            </div>
                            <p className='text-center text-xl font-semibold mt-4'>Don't have an account ? <Link to="/signup" className='text-primary'>Sign Up</Link> </p>
                        </div>
                        <div className='text-center'>
                            <p className='font-bold mb-4'>Or Sign In with </p>
                            <button type='button' className='mb-4'>
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