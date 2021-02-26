import React from 'react'
import { SocialIcon } from 'react-social-icons'

function sendEmail () {
    return
}

export default function Contact () {
    return (

        <div className='lg:pt-2 container mx-auto relative mb-40'>
            <section className='bg-gray-900 shadow-2xld lg:flex p-24 rounded-2xl'>
                <div className='text-lg flex flex-col p-10'>
                    <h1 className='text-primary text-6xl mb-14 -mt-10'>
                      Contact Me
                    </h1>
                    <form className='text-white' onSubmit={sendEmail}>
                        <h2 className='text-3xl mb-8'>Send me a message</h2>
                        <div className='grid grid-cols-1 gap-5'>
                            <input 
                              className='border-2 border-gray-600 bg-gray-900 text-white rounded px-4 py-2 focus:outline-none focus:border-red-600' 
                              type="text" placeholder='Full Name'/>

                            <input 
                              className='border-2 border-gray-600 bg-gray-900 text-white rounded px-4 py-2 focus:outline-none focus:border-red-600' 
                              type="text" placeholder='Email'/>

                            <textarea 
                              placeholder='Your Message'
                              name="message" 
                              id="message" 
                              cols="60" 
                              rows="10" 
                              className='border-2 border-gray-600 bg-gray-900 text-white rounded px-4 py-2 focus:outline-none focus:border-red-600'>
                            </textarea>
                        </div>
                        <button className='border-red-700 p-6 mt-8 font-medium border-2 border-red-700 rounded 
                        hover:bg-transparent hover:border-blue-700 transition duration-700'>Send Message</button>
                    </form>
                </div>
                <div className='grid grid-cols-1 items-center m-auto space-y-12'>
                  <SocialIcon url='https://www.linkedin.com/in/kahu-leary-3a6542124/' target='_blank' fgColor='#fff' bgColor='#ff0000' style={{ height: 75, width: 75}} />
                  <SocialIcon url='https://github.com/Kahu-Leary' target='_blank' fgColor='#fff' bgColor='#ff0000' style={{ height: 75, width: 75}} />
                </div>
            </section>
        </div>
    )
}