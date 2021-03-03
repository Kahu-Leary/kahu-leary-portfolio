import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar () {
    return (
        <header className='-mb-6 sticky top-0 z-10 bg-lightBg'>
            <div className='container mx-auto flex justify-between px-2'>
                <nav className='flex text-white'>
                    <NavLink to='/' exact 
                        className='inline-flex items-center px-6 tracking-wide text-primary text-4xl hover:text-secondary transition duration-500'>
                        KL
                    </NavLink>
                    <NavLink to='/projects' 
                        className='inline-flex items-center py-3 px-4 my-6 hover:text-primary transition duration-500'
                        activeClassName='text-primary'>
                        Projects
                    </NavLink>
                    {/* <NavLink to='/post' 
                        className='inline-flex items-center py-3 px-4 my-6 hover:text-primary  transition duration-500'
                        activeClassName='text-primary'>
                        Blog
                    </NavLink> */}
                    <NavLink to='/about' 
                        className='inline-flex items-center py-3 px-4 my-6 hover:text-primary  transition duration-500'
                        activeClassName='text-primary'>
                        About
                    </NavLink>
                    <NavLink to='/contact' 
                        className='inline-flex items-center py-3 px-4 my-6 hover:text-primary  transition duration-500'
                        activeClassName='text-primary'>
                        Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}