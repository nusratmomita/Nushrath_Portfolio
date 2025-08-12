import React from 'react';

const AboutMe = () => {
    return (
        <div id="aboutMe" data-aos="fade-down-right" className='max-w-7xl mx-10 lg:mx-auto text-[#2C1250] space-y-5 mb-20'>
            <h1 className='text-6xl font-extrabold text-[#D9D9D9] text-left'>About Me</h1>
            <div className="px-6 py-10 bg-purple-100 rounded-tl-4xl rounded-br-4xl shadow-md space-y-5">
                <h1 className='text-4xl font-extrabold'>Programming Journey 💻</h1>

                <p className="text-3xl font-bold leading-relaxed">
                    My programming journey actually started from the fear of <span className='text-4xl font-extrabold'>exams.</span> 
                    I still remember how panicked and tense I was when I learned about an upcoming exam — and I hadn’t even installed CodeBlocks on my computer yet!
                    After spending 2–3 months delicately learning programming, I honestly fell in <span className='text-4xl font-extrabold'>LOVE ❤</span> with it. Since then, programming has become my stress reliever.
                </p>

                {/* <p className="text-3xl font-bold leading-relaxed">
                    From learning <span className='italic font-extrabold'>binary trees</span> to building <span className='italic font-extrabold'>full-stack websites</span>, 
                    from struggling with logic to solving real-world problems — I’m growing stronger every day as a developer and thinker.
                </p> */}

                <p className="text-3xl font-bold leading-relaxed">
                    I enjoy making something that challenges my developing skills. That can be a feature that I never work on or an UI that is quite tough. I always try to learn and explore new things. 
                </p>

                <p className="text-3xl font-bold leading-relaxed">
                    Outside of coding, you’ll find me doodling, watching YouTube, getting lost in my own thoughts, or in the kitchen making a cup of coffee ☕.
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
