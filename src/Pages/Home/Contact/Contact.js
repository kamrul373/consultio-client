import React from 'react';
import { toast } from 'react-hot-toast';
import "./Contact.css";
const Contact = () => {
    const handlemessage = (e) => {
        e.preventDefault();
        toast.success("Thank you for contacting me!");
        e.target.reset();
    }
    return (
        <div className='bg-zinc-100  py-16 px-8'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                <div className='flex justify-center items-center'>
                    <h2 className='text-6xl font-bold text-black'>Contact Me</h2>
                </div>
                <form onSubmit={handlemessage} className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-accent" placeholder="Bio"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;