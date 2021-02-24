import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar () {
    return (
        <header className='bg-transparent'>
            <div className='container mx-auto flex justify-between'>
                <nav className='flex text-white'>
                    <NavLink to='/' exact className='inflex-flex items-center py-4 px-3 mr-4 text-xl tracking-wide text-yellow-600'>
                        KL
                    </NavLink>
                    <NavLink to='/posts' className='inline-flex items-center px-4'>
                        Blog
                    </NavLink>
                    <NavLink to='/projects' className='inline-flex items-center px-4'>
                        Projects
                    </NavLink>
                    <NavLink to='/about' className='inline-flex items-center px-4'>
                        About
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}