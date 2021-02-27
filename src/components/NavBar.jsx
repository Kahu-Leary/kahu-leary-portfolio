import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar () {
    return (
        <header className='bg-transparent sticky top-0 z-10'>
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
            </div>
        </header>
    )
}