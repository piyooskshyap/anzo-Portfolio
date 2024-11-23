import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const Page5 = () => {

    return (
        <div className='relative'>
            <div className='flex flex-col justify-center'>
                <img className="skybackground w-full top-0" src="/src/assets/img/skybackground.png" alt="Sky Background" />
                <img className="skills absolute top-0 left-0" src="/src/assets/img/skills.png" alt="Skills" />
                <h1 className="absolute top-[40vh] left-[4vw] text-[15vw] text-black font-[anzo4]">SOFT</h1>
                <img className='h-[210vh] w-[60%] ml-[20vw]' src="/src/assets/img/astrostanding.png" alt="" />
            </div>
        </div>
    );
}

export default Page5;
