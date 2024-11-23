import React, { useRef, useState, useEffect } from 'react'
import Page1Bottom from '../components/Page1Bottom'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Tilttext from '../components/Tilttext'

const page1 = () => {
    const tiltRef = useRef(null)

    const [xVal, setxVal] = useState(0)
    const [yVal, setyVal] = useState(0)
    const mouseMoving = (e) => {
        setyVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width / 2) / 30)
        setxVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height / 2) / 10);
        // tiltRef.current.style.transform = `rotateX(${xVal}deg) rotateY(${yVal}deg)`
    }
    useGSAP(function () {
        gsap.to(tiltRef.current, {
            transform: `rotateX(${xVal}deg) rotateY(${yVal}deg)`,
            duration: 1.5,
        });
    }, [xVal, yVal])

    return (<>
        <div onMouseMove={(e) => {
            mouseMoving(e)
        }} className='h-screen w-full   px-3 py-3'>
            <div id='page1-in' className='pl-16 pt-10 h-full w-full bg-black rounded-3xl bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_572,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] bg-cover'>
                <img className='h-[13vh]' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
                <Tilttext abc={tiltRef} />
                <Page1Bottom />
            </div>
        </div>
    </>
    )
}

export default page1

