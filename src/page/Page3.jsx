import React from 'react'

const Page3 = () => {
    return (
        <div className='relative h-screen flex justify-center items-center flex-col '>
            <img className='absolute z-20 top-[12%] ' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_890,h_512,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
            <video loop muted autoPlay className='z-10 w-[52vw] h-[110vh] top-8 relative ' src="/src/assets/file.mp4"></video>
            <div className='absolute top-[45%] w-[70%] right-50 h-[2px] bg-zinc-600'></div>
            <div className='absolute top-[65%] w-[90%] right-10 h-[2px] bg-zinc-600'></div>
            <div className='absolute top-[85%] w-[100%] right-15 h-[2px] bg-zinc-600'></div>
        </div>
    )
}

export default Page3
