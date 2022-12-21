import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import pageTitle from '../../utility/pageTitle';
import Services from '../Shared/Services/Services';
import Loading from '../Shared/Loading/Loading';


const AllServices = () => {
    // page title
    pageTitle("Services")
    const services = useLoaderData();
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    return (
        <div className='mt-28'>
            <Services services={services}></Services>
        </div>
    );
};

export default AllServices;