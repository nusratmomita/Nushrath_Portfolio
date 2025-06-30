import React from 'react';

const JatriDetails = () => {
    return (
        <div className="card bg-base-100 p-20 shadow-sm max-w-5xl mx-auto mt-40">
            <div className="card-body space-y-5">
                <span className="text-5xl font-bold">Jatri</span>
                <h1 className="text-5xl font-bold">🔗Description</h1>
                <p className="text-3xl font-bold">Made with MERN stack, Jatri is a full stack project that will help you to find  for your next trip!
                Book car is easy now. </p>
                <h1 className="text-5xl font-bold">🎯Technologies used</h1>
                <ul className="mt-6 flex flex-col gap-2 text-2xl">
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>React</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>ExpressJs</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>MongoDB</span>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span>Firebase</span>
                </li>
                <li >
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    <span >TailwindCSS</span>
                </li>
                </ul>
                <h1 className="text-5xl font-bold">🦾Challenges</h1>
                <p className="text-3xl font-bold">The main challenge I felt while doing this project is in implementing Searching and sorting functionality.
                    After doing a lot of try and fail, I finally implemented it.
                </p>
                <h1 className="text-5xl font-bold">⚡Future Improvement</h1>
                <p className="text-3xl font-bold">I would like to add map integration in this project.
                    Also I am working on the user interface fot this project.
                </p>
            </div>
        </div>
    );
};

export default JatriDetails;