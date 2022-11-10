import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthContextProvider';

const Forgot = () => {
    const { forgotpassword } = useContext(AuthContext);

    const handleForgotPassword = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        forgotpassword(email)
            .then(() => {
                toast.success("Pssword reset email has been sent")
                e.target.reset();
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='mt-32 mb-12 lg:p-12 p-8 lg:w-[50%] w-[90%] mx-auto bg-zinc-100'>
            <h2 className='text-3xl mt-4'>Reset Password</h2>
            <form onSubmit={handleForgotPassword}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name='email' type="text" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Reset Password" className="btn btn-primary" />

                </div>
            </form>

        </div>
    );
};

export default Forgot;