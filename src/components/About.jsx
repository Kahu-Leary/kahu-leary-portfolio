import React, {useEffect, useState } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

import sanityClient from '../client'
import video from '../video/plexus.mov'

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

    if (!author) return <div>Loading...</div>

    return (
        <main className='relative min-h-screen'>
            <div className='lg:overflow-hidden'>
                <div className='absolute inset-0 z-negative lg:opacity-60'>
                    <video autoPlay muted loop className='object-cover w-full h-full'>
                        <source src={video} />
                    </video>
                </div>
            </div>
            <div className='p-10 lg:pt-48 container mx-auto relative '>
                <section className='bg-darkBg justify-center shadow-2xld rounded lg:flex p-32'>
                    <img className='object-cover rounded w-32 h-32 lg:w-64 lg:h-64 mr-28' src={urlFor(author.authorImage).url()} alt={author.name}/>
                    <div className='text-lg flex flex-col justify-center'>
                        <h1 className='text-gray-200 text-6xl text-secondary mb-4'>
                            Hey there, I'm{" "} <span className='text-primary'>{author.name}</span>
                            {/* <span className='text-primary'>{author.name}</span> */}
                        </h1>
                        <div className='prose lg:prose-xl text-gray-200'>
                            <BlockContent blocks={author.bio} projectId='ttbbel5d' dataset='production' />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}