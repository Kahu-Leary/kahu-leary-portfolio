import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar () {
    return (
        <header className='bg-transparent'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex text-white'>
                    <NavLink to='/' exact 
                        className='inline-flex items-center px-3 mr-4 tracking-wide text-primary hover:text-blue-100 text-4xl'>
                        KL
                    </NavLink>
                    <NavLink to='/projects' 
                        className='inline-flex items-center py-3 px-4 my-6 hover:text-primary'
                        activeClassName='text-primary'>
                        Projects
                    </NavLink>
                    <NavLink to='/post' 
                        className='inline-flex items-center py-3 px-4 my-6 hover:text-primary'
                        activeClassName='text-primary'>
                        Blog
                    </NavLink>
                    <NavLink to='/about' 
                        className='inline-flex items-center py-3 px-4 my-6 hover:text-primary'
                        activeClassName='text-primary'>
                        About Me
                    </NavLink>
                    <NavLink to='/Contact' 
                        className='inline-flex items-center py-3 px-4 my-6 hover:text-primary'
                        activeClassName='text-primary'>
                        Contact
                    </NavLink>
                </nav>
                {/* <div className='inline-flex py-3 px-3 my-6'>
                    <SocialIcon url='https://www.linkedin.com/in/kahu-leary-3a6542124/' className='mr-4' target='_blank' fgColor='#fff' bgColor='#ff9a00' style={{ height: 40, width: 40}} />
                    <SocialIcon url='https://github.com/Kahu-Leary' className='mr-4' target='_blank' fgColor='#fff' bgColor='#ff9a00' style={{ height: 40, width: 40}} />
                </div> */}
            </div>
        </header>
    )
}