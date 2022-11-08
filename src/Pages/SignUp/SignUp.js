import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div>
            <div className="bg-base-200 py-8">
                <div className=" lg:w-[40%] mx-auto w-[90%] ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-8 text-center">Sign Up</h1>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign Up</button>
                            </div>
                            <p className='text-center text-xl font-semibold mt-4'>Already have an account ? <Link to="/signin" className='text-primary'>Sign In</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;