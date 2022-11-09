import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const Step = () => {
    const data = {
        title: "The fields on which I give services",
        subtitle: "Popular Category",
        description: "I can assist you in obtaining a favorable result in your case.Sponsoring and managing work visas parts now becoming results in the experience."
    }
    return (
        <div className="px-8 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <SectionTitle data={data}></SectionTitle>
            <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-6">
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                        Immigrant Visas
                    </h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                        Local Visa
                    </h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">

                        Medical Visa
                    </h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                        Tourist Visa
                    </h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                        Business Visa
                    </h6>
                </div>
                <div className="text-center">
                    <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                        <svg
                            className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                            stroke="currentColor"
                            viewBox="0 0 52 52"
                        >
                            <polygon
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                points="29 13 14 29 25 29 23 39 38 23 27 23"
                            />
                        </svg>
                    </div>
                    <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                        Student Visa
                    </h6>
                </div>
            </div>
        </div>
    );
};

export default Step;