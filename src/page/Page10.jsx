import React from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const Page10 = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function () {
    gsap.from(".stickingthisimg", {
      scrollTrigger: {
        trigger: ".stickingthisimg",
        start: "top 0%",
        end: "top -80%",
        // markers: "true",
        scrub: 2,
        pin: true
      },
    });
    gsap.to('.reactimg', {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    })
  })
  return (
    <div className='relative h-screen w-full'>
      <img className='stickingthisimg rounded-3xl' src="/src/assets/img/astrositting.png" alt="" />
      <div className='absolute top-0'>
        <img className='' src="/src/assets/img/callme.png" alt="" />
        <div className='text-white h-screen w-full px-3 py-3 mb-5  bg-white'>
          <div className='relative w-full rounded-3xl object-cover'>
            <img className=' w-full h-screen rounded-3xl' src="https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1322,h_572,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Background%20Anzo_Studio.jpg" alt="" />
            <div className='px-10'>
              <h1 className=' absolute top-[5%] leading-[220px] font-[anzo4] text-[20vw] text-white tracking-wider '>GOT <span className='text-zinc-600 '>AN</span></h1>
              <h1 className=' absolute top-[43%]  leading-[220px] font-[anzo4] text-[20vw] tracking-wider'>IDEA</h1>
              <h1 className=' absolute top-[85%] leading-[19px] font-[anzo2] text-zinc-500 text-[17px]'>IT IS NOT JUST ABOUT SOLVING THE PROBLEM</h1>
              <h1 className=' absolute top-[90%] leading-[19px]  font-[anzo1] text-[17px] tracking-wide text-zinc-100'><span className='text-zinc-600'>BUT</span> OFFERING THE TRANSFORMATION!</h1>
              <img className='reactimg absolute top-[80%] right-[60%]  ' src="https://static.wixstatic.com/media/f1c650_7a84fb38cb2d4bebb8b34004f66d4c3d~mv2.png/v1/fill/w_91,h_91,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/World%20Contact.png" alt="" />
              <h1 className=' absolute top-[83%] right-[35%] leading-[19px]  font-[anzo2] text-[17px] tracking-wide text-zinc-100'>WORLD SERVICE <br />
                I CAN COME TO WHEREVER YOU ARE. <br />
                +31 68 4564137</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page10
