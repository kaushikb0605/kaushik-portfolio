import React from 'react';
import image from '../portfolio_bg.jpg';

const Home = () => {
  return (
    <main>
        <img src={image} alt="Background" className='absolute object-cover w-full h-full'/>
        <section className='relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8'>
            <h1 className='text-6xl text-green-100 font-bold cursive lg:leading-snug bg-blue' >
            <span className='home-name'>Aloha! Kaushik here.</span>
            </h1>
        </section>
        {/* <section className='relative flex justify-content'>
                <p className=' text-3xl text-green-100 cursive description'>I am a frontend developer and a tech enthusiast. I love to build things and solve problems. I am currently working as a software engineer at <a href="https://www.anchanto.com/" target="_blank" rel="noopener noreferrer"><span className='bg-blue-300'>Anchanto</span></a>.</p>
        </section> */}
    </main>
  )
}

export default Home