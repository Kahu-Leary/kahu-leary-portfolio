import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import sanityClient from '../client.js'

export default function Project () {
    const [projectData, setProjectData] = useState(null)

    const pageVariants = {
     hidden: {
         x: '100vw',
         opacity: 0
     },
     visible: {
         x: 0,
         opacity: 1,
         transition: { duration: 1 }
     },
     exit: {
         x: '100vw',
         opacity: 0,
         transition: { ease: 'easeInOut', duration: 1 }
     }
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags
        }`)
        .then(data => setProjectData(data))
        .catch(console.error)
    }, [])

    return (
        <motion.main className='top-0 p-10 absolute min-w-full mt-20 lg:mt-36'
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'>

            <section className='container mx-auto relative overscroll-none'>
                <h1 className='text-gray-200 text-4xl lg:text-5xl flex justify-center mb-12'>My Portfolio</h1>

                <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {projectData && projectData.map((project, index) => (

                    <a className='text-gray-400 font-bold' href={project.link} rel='noopener noreferrer' target='_blank'>
                    <article className='relative shadow-2xld rounded bg-darkBg border-2 border-darkBg p-10 
                    hover:border-secondary hover:text-white transition duration-500 '>
                        <h3 className='text-2xl font-bold mb-2'>
                            <a href={project.link} alt={project.title} target='_blank' rel='noopener noreferrer'>{project.title}</a>
                        </h3>
                        <div className='text-blue-200 text-xs'>
                            {/* <span>
                                <strong className='font-bold'>Completed on</strong>:{' '}
                                {new Date(project.date).toLocaleDateString()}
                            </span> */}
                            {/* <span>
                                <strong className='font-bold'>Place</strong>:{' '}
                                {project.place}
                            </span>
                            <span>
                                <strong className='font-bold'>Type</strong>:{' '}
                                {project.projectType}
                            </span> */}
                            <p className='my-6 text-lg text-white leading-relaxed'>{project.description}</p>
                            <a className='text-primary font-bold text-xl' href={project.link} rel='noopener noreferrer' target='_blank'>
                                View the project{' '}
                                {/* <span role='img' aria-label='right pointer'></span> */}
                            </a>
                        </div>
                    </article>
                    </a>
                    ))}
                </section>
            </section>
        </motion.main>
    )
}