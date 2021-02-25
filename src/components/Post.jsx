import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../client'

export default function Posts () {
    const [postData, setPost] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage {
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then(data => setPost(data))
        .catch(console.error)
    }, [])

    return (
        <main className='bg-secondary min-h-screen p-12'>
            <section className='container mx-auto'>
                <h1 className='text-5xl flext justify-center'></h1>
                <h2 className='text-lg text-gray-400 flex justify-center mb-12'></h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                            <span className='block h-64 relative shadow leading-snug bg-secondary border-l-4 border-primary' key={index}>
                                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className='w-full h-full object-cover absolute' />
                                <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                                <h3 className='text-gray-200 text-lg font-bold px-3 py-4 bg-primary text-primary bg-opacity-75 rounded'>{post.title}</h3>
                                </span>
                            </span>
                        </Link>
                    </article>
                ))}
                </div>
            </section>
        </main>
    )
}