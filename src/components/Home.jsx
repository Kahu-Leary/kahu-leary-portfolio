import React from 'react'

import video from '../video/plexus.mp4'

export default function Home () {
    return (
        <>
        <div className='lg:overflow-hidden'>
            <div className='absolute inset-0 z-negative lg:opacity-60'>
                <video autoPlay muted loop className='object-cover w-full h-full'>
                    <source src={video} />
                </video>
            </div>
        </div>
        <main>
            <section className='container mx-auto relative min-h-screen pt-12 text-white lg:pt-44 px-8'>
                <h2 className='text-3xl text-primary'>Hi, my name is</h2>
                <h1 className='text-8xl text-gray-300'>Kahu Leary</h1>
                <h2 className='text-8xl pt-2 text-gray-400'>I build things for the web</h2>
                <p className='text-2xl text-gray-500 pt-6'>A passionate, hard working full stack developer based in Auckland, New Zealand</p>

                <button className='bg-transparent py-4 px-12 mt-20 mr-12 text-xl 
                hover:bg-blue-600 border-2 border-blue-600 transition duration-700'>See My Work</button>

                <button className='bg-transparent py-4 px-12 mt-20 text-xl 
                hover:bg-blue-600 border-2 border-blue-600 transition duration-700'>Contact Me</button>
            </section>
            <section className='bg-secondary -mt-24 relative min-h-screen pt-12 lg:pt-44 px-8'>
                <div className='container mx-auto'>
                    <h1>test content</h1>
                </div>
            </section>
        </main>
        </>
    )
}