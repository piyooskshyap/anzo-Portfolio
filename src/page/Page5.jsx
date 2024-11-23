import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
const Page5 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function () {
        gsap.from(".slidingtext", {
            opacity: 0, 
            y: 200,
            // duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".slidingtext",
                start: "top 100%",  
                end: "top 10%",  
                // // markers: "true",
                scrub:1
            },
        });
    })


    return (
        <div>
            <div>
                <div className='h-screen w-full   px-3 py-3 text-white'>
                    <div className=' relative pl-16 pt-10 h-full w-full bg-black rounded-3xl '>
                        <video autoPlay muted loop className='absolute bottom-0  h-[100%] w-[90%] rounded-3xl object-cover' src="/src/assets/Moon Rotating.mp4"></video>
                        <h1 className='slidingtext absolute -bottom-44  text-[40vw] font-[anzo4]  '>ABOUT</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page5
