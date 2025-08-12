import React from 'react';

const Education = () => {
    return (
        <div id="education" data-aos="fade-down-left" className='max-w-7xl mx-10 lg:mx-auto text-[#2C1250] space-y-5 mb-20'>
            <h1 className='text-6xl font-extrabold text-[#D9D9D9] text-left'>Education</h1>
            <div className="px-6 py-10 bg-purple-100 rounded-tr-4xl rounded-bl-4xl shadow-md space-y-5">
                <p className="text-3xl font-bold leading-relaxed">Currently, I am on my final year of bachelor's degree.
                    I am doing BSc in <span className='text-4xl font-extrabold'>"Software Engineering"</span> from <span className='text-4xl font-extrabold italic'>"Metropolitan University".</span>
                </p>
                <p className="text-3xl font-bold leading-relaxed">During my academics, I have gained a reasonable knowledge about core subjects like Computer Networking, Database Management, Operating System and many more.</p>
            </div>
        </div>
    );
};

export default Education;