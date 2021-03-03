import React, {useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

import sanityClient from '../client'
import { motion } from 'framer-motion'

const builder = imageUrlBuilder(sanityClient)

function urlFor (source) {
    return builder.image(source)
}

export default function About () {

    const [author, setAuthor] = useState(null)

    const pageVariants = {
     hidden: {
         x: '-100vw'
     },
     visible: {
         x: 0,
         transition: { duration: 1.5 }
     },
     exit: {
         x: '-100vw',
         transition: { ease: 'easeInOut', duration: 1 }
     }
    }

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`)
        .then(data => setAuthor(data[0]))
        .catch(console.error)
    }, [])

    if (!author) return <></>

    return (

        <motion.div 
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'>

        <div className='container mx-auto overscroll-none flex justify-center mt-12 lg:mt-28'>
            <h1 className='text-white text-4xl lg:text-5xl'>
                About Me
            </h1>
        </div>

          <div className='mt-12 md:p-10 lg:-mt-2 lg:pt-20 container mx-auto relative'>
              <section className='bg-darkBg p-10 grid grid-cols-1 gap-8 lg:shadow-2xld rounded lg:flex lg:justify-center lg:p-24'>
                  <img className='object-cover rounded justify-self-center w-32 h-32 lg:w-64 lg:h-64 lg:mr-20' src={urlFor(author.authorImage).url()} alt={author.name}/>
                  <div className='text-lg lg:flex lg:flex-col justify-center'>
                      <h1 className='text-gray-200 text-2xl lg:text-6xl text-secondary mb-4'>
                          Hey there, I'm{" "} <span className='text-primary'>{author.name}</span>
                          {/* <span className='text-primary'>{author.name}</span> */}
                      </h1>
                      <div className='prose lg:prose-xl text-gray-200'>
                          <BlockContent blocks={author.bio} projectId='ttbbel5d' dataset='production' />
                      </div>
                  </div>
              </section>
          </div>
        </motion.div>
    )
}