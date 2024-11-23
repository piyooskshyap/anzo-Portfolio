import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
const Page5 = () => {

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function () {
        gsap.from(".trianglerotate", {
            rotate: 190,
            duration: 1,
            // stagger: 1,
            scrollTrigger: {
                trigger: ".trianglerotate",
                start: "top 100%",
                end: "top -100%",
                scrub: 1,
                // markers: true,
            }
        });
        gsap.from(".trianglerotatee", {
            rotate: 100,
            duration: 1,
            // stagger: 1,
            scrollTrigger: {
                trigger: ".trianglerotatee",
                start: "top 100%",
                end: "top -100%",
                scrub: 1,
                // markers: true,
            }
        });
        gsap.from(".trianglerotateee", {
            y: 100,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".trianglerotatee",
                start: "top 90%",
                end: "top 60%",
                // markers: true,
                scrub: 1
            }
        });
        gsap.from(".slidingtextt", {
            opacity: 0,
            y: 200,
            // duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".slidingtextt",
                start: "top 100%",
                end: "top 80%",
                // markers: "true",
                scrub: 2
            },
        });
    })
    return (
        <div>
            <div>
                <div className='h-[170vh] w-full px-3 py-3 text-white'>
                    <div className='relative pl-16 pt-10 h-full w-full bg-black rounded-3xl'>
                        <img className='trianglerotate absolute top-56 right-60 ' src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_auto/triangle%203.png" alt="" />
                        <h1 className='slidingtextt absolute top-10 left-20 text-[20vw] font-[anzo4] leading-[38vh]' >HOW <br />CAN</h1>
                        <h1 className='slidingtextt absolute top-10 right-20 text-[20vw] font-[anzo4] leading-[38vh]' >I HELP YOU</h1>

                        <p className=' text-[20px] font-[anzo2]  absolute bottom-[40vh] right-20 text-white w-1/5 leading-[3.5vh] '>I am a self-taught web and brand designer with a passion for creating unique and timeless masterpieces for ambitious professionals, entrepreneurs, artists, and boutique businesses.                            Bespoke Freelance for agencies.</p>
                        <p className=' text-[20px] font-[anzo2]  absolute bottom-[40vh] right-[40vw] text-white w-1/5 leading-[3.5vh] '>With a background in strategic marketing and acknowledged expertise in web development, I aim to minimize my client's resources spent on macro and micro-management, marketing research, and hiring a whole team of a larger agency.</p>
                        <p className=' text-[20px] font-[anzo2]  absolute bottom-[40vh] left-20 text-white w-1/5 leading-[3.5vh] '>My mission is to drive exceptional growth for my clients by increasing their brand appearance, defining their identity, and engaging customers through captivating black-and-white aesthetics with a modern, luxurious, and minimalistic touch.</p>

                        <div className='absolute left-20 bottom-32 flex  gap-8 items-end'>
                            <img className='trianglerotatee  ' src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_61,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SUN.png" alt="" />
                            <h1 className=' text-[35px] tracking-wider font-[anzo4]   ' >DESIGN <span className='text-[20px] font-[anzo2]'>01</span></h1>
                        </div>
                        <div className='absolute left-[45vw] bottom-32 flex  gap-8 items-end'>
                            <img className='trianglerotatee  ' src="https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EARTH.png" alt="" />
                            <h1 className=' text-[35px] tracking-wider font-[anzo4]   ' >DEVELOPMENT <span className='text-[20px] font-[anzo2]'>01</span></h1>
                        </div>
                        <div className='absolute right-10 bottom-32 flex  gap-8 items-end'>
                            <img className='trianglerotateee  ' src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/START%20UP.png" alt="" />
                            {/* <img className='trianglerotateee  ' src="https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/START%20UP.png" alt="" /> */}
                            <h1 className=' text-[35px] tracking-wider font-[anzo4]   ' >BRANDING <span className='text-[20px] font-[anzo2]'>01</span></h1>
                        </div>
                        <h1 className='absolute bottom-5 left-20 text-[15px] font-[anzo1] ' >GOT A PROJECT?
                            <br /> THEN PLEASE  CONTACT ME</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page5
