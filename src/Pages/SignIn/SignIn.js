import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider';
import pageTitle from '../../utility/pageTitle';


const SignIn = () => {
    // page title
    pageTitle("Sign In");
    // auth context
    const { login, loginwithProvider } = useContext(AuthContext);
    // navigation
    const navigate = useNavigate();
    // location
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
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
                const currentUser = {
                    email: user.email
                }
                // requesting for an authorization token
                fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem("consultio-token", data.token)
                    })
                    .catch(error => console.log(error));

                form.reset();
                navigate(from, { replace: true });
            }).catch(error => setError(error.message))
    }
    // google login
    const handlGoogleLogin = () => {
        const googleProvider = new GoogleAuthProvider();

        loginwithProvider(googleProvider)
            .then(response => {
                const user = response.user;
                const currentUser = {
                    email: user.email
                }
                // requesting for an authorization token
                fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem("consultio-token", data.token)
                    })
                    .catch(error => console.log(error));
                console.log(user);
                navigate(from, { replace: true });
            }).catch(error => console.log(error))
    }
    // github 
    const handleGithubLogin = () => {
        const githubProvider = new GithubAuthProvider();

        loginwithProvider(githubProvider)
            .then(response => {
                const user = response.user;
                const currentUser = {
                    uid: user.uid
                }
                // requesting for an authorization token
                fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem("consultio-token", data.token)
                    })
                    .catch(error => console.log(error));
                console.log(user);
                navigate(from, { replace: true });
            }).catch(error => console.log(error))
    }

    return (
        <div className='mt-32'>
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
                                <label className="label text-primary cursor-pointer">
                                    <Link to="/forgot">Forgot password?</Link>
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
                                <FaGoogle className='text-3xl mr-2'></FaGoogle>
                            </button>
                            <button onClick={handleGithubLogin} type='button' className='mb-4'>
                                <FaGithub className='text-3xl  ml-2'></FaGithub>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;