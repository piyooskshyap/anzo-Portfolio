import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Page1Bottom = () => {
    useGSAP(function () {
        gsap.to('#banner img', {
            rotate: 360,
            duration: 5,
            repeat: -1,
            ease: 'linear'
        })
    })

    return (
        <div className='absolute bottom-0 left-0 px-20 pb-10 w-full flex  justify-between items-center'>
            <div className='mt-28 font-[anzo1] tracking-widest'>
                <h1 className='text-white'>BRAND DESIGN | WEBSITE DESIGN</h1>
                <h1 className='text-white'>BESPOKE FREELANCE</h1>
            </div>
            <div id='banner'>
                <img className='mb-7' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
                <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
            </div>
        </div>
    )
}

export default Page1Bottom
