import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
const Page4 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function () {
        gsap.from(".slidingtext1", {
            opacity: 0,
            y: 200,
            // duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".slidingtext1",
                start: "top 130%",
                end: "top 80%",
                // markers: "true",
                scrub: 2
            },
        });
        gsap.from(".slidingtext2", {
            opacity: 0,
            y: 200,
            // duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".slidingtext2",
                start: "top 130%",
                end: "top 80%",
                // markers: "true",
                scrub: 2
            },
        });
        gsap.from(".slidingtext3", {
            opacity: 0,
            y: 200,
            // duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".slidingtext3",
                start: "top 130%",
                end: "top 80%",
                // markers: "true",
                scrub: 2
            },
        });
    })

    return (
        <div>
            <div className='  h-screen w-full px-3 py-3 mt-24 '>
                <div className='relative pl-16 pt-10 h-full w-full bg-black rounded-3xl object-cover'>
                    <video autoPlay muted loop className='absolute top-0 w-[100%] right-0 h-[100%] rounded-3xl object-cover' src="/src/assets/earth.mp4"></video>
                    <h1 className='slidingtext1 absolute top-[10vh] left-[5vw] leading-[20px] font-[anzo4] text-[12vw] text-white'>PROFESSIONAL <br /> <span className=' text-zinc-800 text-[15px] font-[anzo1]'>Intuition, Imagination, Discipline</span>   </h1>
                    <h1 className='slidingtext2 absolute top-[40vh] left-[35vw] leading-[20px] font-[anzo4] text-[12vw] text-white'>PERSONAL <br /> <span className=' text-yellow-200 text-[15px] font-[anzo1]'>Time Management, Multitasking, Creativity</span>   </h1>
                    <h1 className='slidingtext3 absolute top-[70vh] left-[65vw] leading-[20px] font-[anzo4] text-[12vw] text-white'>ADDITIONAL <br /> <span className=' text-green-500 text-[15px] font-[anzo1]'>3D, Animation, AI Tools</span>   </h1>
                </div>
            </div>

        </div>
    )
}

export default Page4 