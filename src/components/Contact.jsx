import React from 'react'
import { SocialIcon } from 'react-social-icons'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_capgar7', 'template_60b98m3', e.target, 'user_AXTZ3Zzr2y6Om797dTwOE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

export default function Contact () {

    const pageVariants = {
     hidden: {
         y: '100vw',
         opacity: 0
     },
     visible: {
         y: 0,
         opacity: 1,
         transition: { duration: 1.5 }
     },
     exit: {
         y: '100vw',
         opacity: 0,
         transition: { ease: 'easeInOut', duration: 1 }
     }
    }

    return (

        <motion.div 
            variants={pageVariants}
            initial='hidden'
            animate='visible'
            exit='exit'>

        <div className='container mx-auto flex justify-center mt-12 lg:mt-28'>
            <h1 className='text-white text-4xl lg:text-5xl mb-10'>
                Connect With Me
            </h1>
        </div>
        <div className='lg:pt-2 container mx-auto relative lg:px-28'>
            <section className='bg-darkBg lg:shadow-2xld lg:flex lg:px-32 rounded'>
                <div className='text-lg flex p-6 md:p-16 lg:py-18 lg:px-0'>

                    <form className='text-white' onSubmit={sendEmail}>
                        <h2 className='text-2xl text-center mb-8'>Send me a message</h2>
                        <div className='grid grid-cols-1 gap-5'>
                            <input 
                              className='border-2 border-yellow-900 bg-lightBg text-white rounded px-4 py-2 focus:outline-none focus:border-primary transition duration-700' 
                              type="text" placeholder='Full Name' name='full_name'/>

                            <input 
                              className='border-2 border-yellow-900 bg-lightBg text-white rounded px-4 py-2 focus:outline-none focus:border-primary transition duration-700' 
                              type="text" placeholder='Email' name='email_address'/>

                            <textarea 
                              placeholder='Your Message'
                              name="message" 
                              id="message" 
                              cols="110" 
                              rows="6" 
                              className='border-2 border-yellow-900 bg-lightBg text-white rounded px-4 py-2 focus:outline-none focus:border-primary transition duration-700'>
                            </textarea>
                        </div>

                        <div className='grid grid-cols-1'>
                            <button className='p-4 mt-8 border-2 border-yellow-900  
                            hover:bg-transparent hover:border-primary transition duration-700'>Send Message</button>
                        </div>
                    </form>
                </div>
                <div className='container mx-auto py-12 lg:py-16 lg:pl-28'>
                    <h2 className='text-white text-3xl flex justify-center mt-6 lg:mt-0'>Or find me here</h2>
                    <div className='flex justify-center p-8 lg:p-12 space-x-12'>
                        <SocialIcon url='https://www.linkedin.com/in/kahu-leary-3a6542124/' target='_blank' fgColor='#fff' bgColor='#ff8a00' style={{ height: 75, width: 75}} />
                        <SocialIcon url='https://github.com/Kahu-Leary' target='_blank' fgColor='#fff' bgColor='#ff8a00' style={{ height: 75, width: 75}} />
                    </div>
                </div>
            </section>
        </div>
        </motion.div>
    )
}