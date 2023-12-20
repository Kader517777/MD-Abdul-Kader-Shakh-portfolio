import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold mb-5 text-center'>Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 my-5'>
                <Link to={'https://blood-donation-ff1a0.web.app'}><img src="https://i.ibb.co/0CH5Rkb/Screenshot-20.png" className=' rounded-md border-[2px] border-[red]' alt="" /></Link>
                <Link to={'https://6578ce413a990d0e4de7733a--bright-daifuku-9c3ac1.netlify.app'}><img src="https://i.ibb.co/KGY7dzK/Screenshot-5.png" className=' rounded-md border-[2px] border-[red]' alt="" /></Link>

            </div>
        </div>
    );
};

export default Projects;