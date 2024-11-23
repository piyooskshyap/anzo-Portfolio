import React from 'react'

const Tilttext = (props) => {
    return (
        <div id='tiltdiv' ref={props.abc} className='text-white mt-32 font-[anzo1]'>
            <h1 className='text-6xl'>I AM <span className='text-black' > DARK MODE</span>™ </h1>
            <h1 className='text-8xl text-white'>DESIGNER</h1>
            <h1 className='text-6xl'>TO HIRE</h1>
        </div>
    )
} 
export default Tilttext
