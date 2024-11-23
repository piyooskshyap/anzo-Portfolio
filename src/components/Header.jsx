import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
    return (
        <div className='fixed w-full z-10 pt-16 pr-10 flex justify-end items-center'>
            < button className='hover:bg-white hover:text-black hover:border-black bg-black border-4 text-white rounded-full px-8 py-2'>Hire me</button>
            <i className="ri-menu-line text-4xl ml-4"></i>
        </div>
    )
}

export default Header
