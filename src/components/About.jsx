import React, {useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

import sanityClient from '../client'

const builder = imageUrlBuilder(sanityClient)

function urlFor (source) {
    return builder.image(source)
}

export default function About () {
    const [author, setAuthor] = useState(null)

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
        <>
          <div className='mt-28 md:p-10 lg:mt-0 lg:pt-48 container mx-auto relative'>
              <section className='bg-darkBg p-10 grid grid-cols-1 gap-8 lg:shadow-2xld rounded lg:flex lg:p-32'>
                  <img className='object-cover rounded justify-self-center w-32 h-32 lg:w-64 lg:h-64' src={urlFor(author.authorImage).url()} alt={author.name}/>
                  <div className='text-lg lg:flex lg:flex-col justify-center'>
                      <h1 className='text-gray-200 text-2xl text-secondary mb-4'>
                          Hey there, I'm{" "} <span className='text-primary'>{author.name}</span>
                          {/* <span className='text-primary'>{author.name}</span> */}
                      </h1>
                      <div className='prose lg:prose-xl text-gray-200'>
                          <BlockContent blocks={author.bio} projectId='ttbbel5d' dataset='production' />
                      </div>
                  </div>
              </section>
          </div>
        </>
    )
}