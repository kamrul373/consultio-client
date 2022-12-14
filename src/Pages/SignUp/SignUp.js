import React, { useState, useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider';
import pageTitle from '../../utility/pageTitle';
import passwordValidator from '../../utility/passwordValidator';

const SignUp = () => {
    // page title
    pageTitle("Sign Up");
    // auth cotext
    const { createUser, updateUser } = useContext(AuthContext);
    // error state
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    // custom loading
    const [loading, setLoading] = useState(false)
    const [existerror, setExistsError] = useState("")
    // sign up form event handler
    const handleSubmit = (e) => {
        setLoading(true);
        setExistsError("")
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(response => {
                // update profile 
                const profile = {
                    displayName: name,
                    photoURL: photo,
                }
                updateUser(profile);
                // requesting for an authorization token
                const user = response.user;
                const currentUser = {
                    email: user.email
                }
                console.log(response)
                console.log(currentUser)
                fetch("https://consultio-server.vercel.app/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("consultio-token", data.token)
                    })
                    .catch(error => console.log(error));
                toast.success("Your account created successfully !");
                form.reset();
                setLoading(false);
                navigate("/myreviews")
                window.location.reload();
                toast.success("Signup successfully!")
            }).catch(error => {
                if (error.message.includes("auth/email-already-in-use")) {
                    setExistsError("User already exist")
                }
                setLoading(false);
            })

    }
    // password input validation handler
    const validatePassword = (e) => {
        const password = e.target.value;
        passwordValidator(password, setError);
    }
    return (
        <div className='mt-32'>
            <div className="bg-base-200 py-8">
                <div className=" lg:w-[40%] mx-auto w-[90%] ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mb-8 text-center">Sign Up</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="card w-full shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo RUL</span>
                                </label>
                                <input name='photoURL' type="url" placeholder="Your photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="text" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input onBlur={validatePassword} name='password' type="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <p className="label-text-alt text-red-600 text-lg">{error && error} {existerror && existerror} </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary" disabled={error ? true : false}>
                                    {
                                        loading ? <button className="btn btn-square loading btn-primary text-white"></button> : "Sign Up"
                                    }
                                </button>
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