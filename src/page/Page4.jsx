import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
const Page4 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function () {
        gsap.from(".RotateText1", {
            transform: 'rotateX(-130deg)',
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.RotateText1',
                start: "top 80%",
                end: "top 40%",
                scrub: 2
            }
        })
        gsap.from(".RotateText2", {
            transform: 'rotateX(-130deg)',
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.RotateText2',
                start: "top 80%",
                end: "top 40%",
                scrub: 2
            }
        })
        gsap.from(".RotateText3", {
            transform: 'rotateX(-130deg)',
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.RotateText3',
                start: "top 80%",
                end: "top 40%",
                scrub: 2
            }
        })
        gsap.from(".RotateText4", {
            transform: 'rotateX(-130deg)',
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.RotateText4',
                start: "top 80%",
                end: "top 40%",
                scrub: 2
            }
        })
        gsap.from(".RotateText5", {
            transform: 'rotateX(-130deg)',
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.RotateText5',
                start: "top 80%",
                end: "top 40%",
                scrub: 2
            }
        })
        gsap.from(".RotateText6", {
            transform: 'rotateX(-130deg)',
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: '.RotateText6',
                start: "top 80%",
                end: "top 40%",
                scrub: 2
            }
        })
    })

    return (
        <div>
            <div className='text-white h-screen w-full px-3 py-3 mt-24'>
                <div className='relative pl-16 pt-10 h-full w-full bg-black rounded-3xl object-cover'>
                    <video autoPlay muted loop className='absolute top-0 w-[100%] right-0 h-[100%] rounded-3xl object-cover' src="/src/assets/earth.mp4"></video>
                    <h1 className='absolute top-[1%] leading-[220px] font-[anzo4] text-[20vw] text-zinc-800'>WHAT</h1>
                    <h1 className='absolute top-[38%]  leading-[220px] font-[anzo4] text-[20vw]'>I DO</h1>
                    <h1 className='absolute top-[80%] leading-[19px] font-[anzo1] text-[17px] text-zinc-100'>I DESIGN AND DEVELOP</h1>
                    <h1 className='absolute top-[85%] leading-[19px] font-[anzo2] text-zinc-500 text-[17px]'>MORDERN , IMPACTFUL AND LUXURIOUS</h1>
                    <h1 className='absolute top-[90%] leading-[19px]  font-[anzo1] text-[17px] tracking-wide text-zinc-100'>websites that seamlessly bridge your goals with need of your clients</h1>
                </div>
            </div>
            <div id='section-2' className='  p-20 text-center'>
                <h1 className='pt-10'>©  anzo.studio 2024 | designed and developed</h1>
                <h1 className='RotateText1 font-[anzo4] text-[40vw] text-center leading-[35vw] '>HELPING</h1>
                <h1 className='RotateText2 font-[anzo4] text-[40vw] text-center leading-[35vw] '>MY</h1>
                <h1 className='RotateText3 font-[anzo4] text-[40vw] text-center leading-[35vw] '>CLIENTS</h1>
                <h1 className='RotateText4 font-[anzo4] text-[40vw] text-center leading-[35vw] '>TO ACHIEVE</h1>
                <h1 className='RotateText5 font-[anzo4] text-[40vw] text-center leading-[35vw] '>THEIR</h1>
                <h1 className='RotateText6 font-[anzo4] text-[40vw] text-center leading-[35vw]'>DREAMS !</h1>
            </div>
        </div>
    )
}

export default Page4 