import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LetterB from './LetterB'
import ClipPath from './ClipPath'
import './style.css'
import LetterR from './LetterR'
import LetterA from './LetterA'
import LetterN from './LetterN'
import LetterD from './LetterD'
import LetterI from './LetterI'
import LetterG from './LetterG'
import { useWindowScroll } from 'react-use'

const ZoomOut = () => {
    gsap.registerPlugin(ScrollTrigger)
    const ref = useRef(null)

    useEffect(() => {
        const element = ref.current
        const eyeSmall = element.querySelectorAll('.eye-small')
        const eyeImage = element.querySelectorAll('.eye-image')
        // const letter = element.querySelectorAll('.letter')
        // console.dir(element.querySelectorAll('.eye-small').length);

        gsap.fromTo(
            element.querySelector('.curtain'),
            {
                scale: 5
            },
            {
                scale: 1,
                scrollTrigger: {
                    trigger: element.querySelector('.wrap-pice'),
                    start: '0px',
                    end: '300px',
                    scrub: 0.8
                }
            }
        )




        gsap.fromTo(
            element.querySelector('.letter-b'),
            {
                scale: 12.5,
                x: '462px',
                y: '-400px',
            },
            {
                scale: 5,
                x: '186px',
                y: '-160px',
                scrollTrigger: {
                    trigger: element.querySelector('.wrap-pice'),
                    start: '300px',
                    end: '400px',
                    scrub: 0.8
                }
            }
        )


        for (let i = 0; i < eyeSmall.length; i++) {
            gsap.fromTo(
                eyeSmall[i],
                {
                    opacity: 0
                },
                {
                    opacity: 1,
                    scrollTrigger: {
                        trigger: element.querySelector('.wrap-pice'),
                        start: '400px',
                        end: '800px',
                        scrub: 0.8
                    }
                }
            )
        }

        gsap.fromTo(
            element.querySelector('.letter-b'),
            {},
            {

                x: '0',
                y: '0',
                scale: 0.3,
                scrollTrigger: {
                    trigger: element.querySelector('.wrap-pice'),
                    start: '900px',
                    end: '1200px',
                    scrub: 0.8
                }
            }
        )

        for (let i = 0; i < eyeImage.length; i++) {
            gsap.fromTo(
                eyeImage[i],
                {
                    opacity: 1
                },
                {
                    opacity: 0,
                    scrollTrigger: {
                        trigger: element.querySelector('.wrap-pice'),
                        start: '900px',
                        end: '1200px',
                        scrub: 0.8
                    }
                })
        }

        gsap.fromTo(
            element.querySelector('.letter-b-wrapper'),
            {
            },
            {

                left: '-150px',
                scrollTrigger: {
                    trigger: element.querySelector('.wrap-pice'),
                    start: '1300px',
                    end: '1900px',
                    scrub: 0.8
                }
            }
        )

        gsap.fromTo(
            element.querySelector('.other-letters'),
            {
                opacity: 0
            },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: element.querySelector('.wrap-pice'),
                    start: '1500px',
                    end: '1900px',
                    scrub: 0.8
                }
            }
        )
    }, [])


    return (
        <div>
            <ClipPath />

            <div className='w-full h-screen grid place-items-center fixed inset-0 overflow-hidden bg-[#f8f8f8]' ref={ref}>
                <div className='absolute wrap-pice -top-1'></div>
                <div className='absolute letter-b-wrapper'>
                    <LetterB />
                </div>


                <div className='absolute left-[289px] flex other-letters opacity-0'>
                    <img src="/randing.png" alt="" className='h-[210px]' />
                    {/* <LetterR />
                    <LetterA />
                    <LetterN />
                    <LetterD />
                    <LetterI />
                    <LetterN />
                    <LetterG /> */}
                </div>

            </div>
        </div>

    )
}

export default ZoomOut