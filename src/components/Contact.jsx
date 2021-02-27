import React from 'react'
import { SocialIcon } from 'react-social-icons'

function sendEmail () {
    return
}

export default function Contact () {
    return (
        <>
        <div className='container mx-auto flex justify-center'>
            <h1 className='text-white text-5xl mb-14 -mt-10'>
                Contact Me
            </h1>
        </div>
        <div className='lg:pt-2 container mx-auto relative mb-40'>
            <section className='bg-darkBg shadow-2xld lg:flex p-24 rounded'>
                <div className='text-lg flex flex-col p-10'>

                    <form className='text-white' onSubmit={sendEmail}>
                        <h2 className='text-3xl mb-8'>Send me a message</h2>
                        <div className='grid grid-cols-1 gap-5'>
                            <input 
                              className='border-2 border-yellow-900 bg-lightBg text-white rounded px-4 py-2 focus:outline-none focus:border-primary' 
                              type="text" placeholder='Full Name'/>

                            <input 
                              className='border-2 border-yellow-900 bg-lightBg text-white rounded px-4 py-2 focus:outline-none focus:border-primary' 
                              type="text" placeholder='Email'/>

                            <textarea 
                              placeholder='Your Message'
                              name="message" 
                              id="message" 
                              cols="60" 
                              rows="10" 
                              className='border-2 border-yellow-900 bg-lightBg text-white rounded px-4 py-2 focus:outline-none focus:border-primary'>
                            </textarea>
                        </div>
                        <button className='border-primary p-6 mt-8 font-medium border-2 border-yellow-900 rounded 
                        hover:bg-transparent hover:border-primary transition duration-700'>Send Message</button>
                    </form>
                </div>
                <div className='grid grid-cols-1 items-center m-auto space-y-12'>
                  <SocialIcon url='https://www.linkedin.com/in/kahu-leary-3a6542124/' target='_blank' fgColor='#fff' bgColor='#ff9a00' style={{ height: 75, width: 75}} />
                  <SocialIcon url='https://github.com/Kahu-Leary' target='_blank' fgColor='#fff' bgColor='#ff9a00' style={{ height: 75, width: 75}} />
                </div>
            </section>
        </div>
        </>
    )
}