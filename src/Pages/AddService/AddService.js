import React from 'react';
import { toast } from 'react-hot-toast';
import pageTitle from '../../utility/pageTitle';

const AddService = () => {
    // page title
    pageTitle("Add New Service");
    // add service event handler
    const handleServicePublish = (e) => {
        e.preventDefault();
        const form = e.target;
        const service_name = form.service_name.value;
        const summary = form.summary.value;
        const description = form.description.value;
        const price = form.price.value;
        const documents = form.doc.value.split("\n");
        const visa_types = form.visa.value.split("\n");
        const img = form.thumb_url.value;
        const age_limit = form.age.value;
        const ratting = "0"

        const data = {
            service_name, summary, description, price, documents, visa_types, img, age_limit, ratting
        }
        // posting service request to server
        fetch("https://consultio-server.vercel.app/addservice", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                form.reset()
                toast.success("Service Published Successfully");
            }).catch(error => console.log(error));

    }
    return (
        <div className='mt-32 lg:px-32 px-12 mb-8'>
            <h2 className='text-3xl mt-8'>Add Service</h2>
            <form onSubmit={handleServicePublish}>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Servie Name</span>
                    </label>
                    <input name='service_name' type="text" placeholder="Service Name" className="input input-bordered" required />
                </div>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Servie Thumbnail URL</span>
                    </label>
                    <input name='thumb_url' type="url" placeholder="Servie Thumbnail URL" className="input input-bordered" required />
                </div>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Summary</span>
                    </label>
                    <textarea name="summary" className="textarea textarea-primary" placeholder="Service Summary" required></textarea>
                </div>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" rows="6" className="textarea textarea-primary" placeholder="Service Description" required></textarea>
                </div>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Service Charge</span>
                    </label>
                    <input name='price' type="text" placeholder="Service Price" className="input input-bordered" required />
                </div>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Required Documents <span className='text-primary'>(please put each document name in a separate line)</span></span>
                    </label>
                    <textarea name="doc" rows="4" className="textarea textarea-primary" placeholder="Required Documents" required></textarea>
                </div>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Visa Types <span className='text-primary'>(please put each document name in a separate line)</span></span>
                    </label>
                    <textarea name="visa" rows="4" className="textarea textarea-primary" placeholder="Visa Types"></textarea>
                </div>
                <div className="form-control mb-2">
                    <label className="label">
                        <span className="label-text">Prefered Age</span>
                    </label>
                    <input name='age' type="text" placeholder="Prefered Age" className="input input-bordered" />
                </div>
                <div className="form-control mb-8 mt-6">
                    <input type="submit" className='btn btn-primary lg:btn-wide' value="Publish" />
                </div>
            </form>
        </div>
    );
};

export default AddService;