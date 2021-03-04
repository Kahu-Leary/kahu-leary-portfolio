import React from 'react'
import { NavLink } from 'react-router-dom'
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'

export default function Home () {

    const pageVariants = {
     hidden: {
         opacity: 0,
     },
     visible: {
         opacity: 1,
         transition: { duration: 0.5 }
     },
     exit: {
         opacity: 0,
         transition: { ease: 'easeInOut', duration: 1 }
     }
    }

    return (
       <>
        <motion.main className='lg:min-h-screen lg:absolute lg:top-0 lg:container lg:min-w-full' 
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'>

            <section className='container mx-auto relative text-white pt-20 md:pt-44 lg:pt-72 px-12'>
                <motion.h2 className='text-xl md:text-3xl lg:text-4xl text-gray-300' animate={{}}>Hi, my name is</motion.h2>
                <h1 className='text-5xl md:text-6xl lg:text-8xl text-primary'>
                    <Typewriter options={{loop:true}} onInit={((typewriter) => {
                        typewriter.typeString('Kahu Leary')
                            .pauseFor(4000)
                            .deleteAll()
                            .start() 
                    })} /></h1>
                <h2 className='text-4xl md:text-5xl lg:text-7xl pt-2 text-gray-400'>I build things for the web</h2>
                <p className='text-l md:text-2xl lg:text-2xl text-gray-500 pt-6'>A passionate, hard working full stack developer based in Auckland, New Zealand</p>

                <div className='grid grid-cols-1 mt-12 space-y-10 md:grid-cols-2 md:space-y-0 lg:inline-flex'>
                    <NavLink className='' to='/projects'>
                        <button className='bg-transparent py-5 px-14 text-xl md:mr-10 lg:px-16
                        hover:bg-primary border-2 border-primary transition duration-700'>
                            See My Work
                        </button>
                    </NavLink>

                    <NavLink className='flex-1' to='/contact'>
                        <button className='bg-transparent py-5 px-16 text-xl lg:px-16
                        hover:bg-secondary hover:text-primary border-2 border-secondary transition duration-700'>
                            Contact Me
                        </button>
                    </NavLink>
                </div>
            </section>

        </motion.main>
       </>
    )
}