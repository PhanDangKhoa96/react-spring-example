import React from 'react'
import { useSpring, animated } from 'react-spring'

const Logo = () => {
    const baseDuration = 2000

    const opacity = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: {
            duration: 500
        },
    })

    const letterY = useSpring({
        from: { x: 1300 },
        to: { x: 0 },
        config: {
            duration: baseDuration
        },
    })

    const letterE = useSpring({
        from: { x: 1000 },
        to: { x: 0 },
        config: {
            duration: baseDuration
        },
    })

    const letterT = useSpring({
        from: { x: 1500 },
        to: { x: 0 },
        config: {
            duration: baseDuration
        },
    })

    const letterCE = useSpring({
        from: { x: 2200 },
        to: { x: 0 },
        config: {
            duration: baseDuration
        },
    })

    const letterEFirst = useSpring({
        from: { x: 550 },
        to: { x: 0 },
        config: {
            duration: baseDuration
        },
    })

    const letterR = useSpring({
        from: { x: 750 },
        to: { x: 0 },
        config: {
            duration: baseDuration
        },
    })

    const letterI = useSpring({
        from: { x: 550 },
        to: { x: 0 },
        config: {
            duration: baseDuration
        },
    })

    const letterL = useSpring({
        from: { x: 750 },
        to: { x: 0 },
        config: {
            duration: baseDuration
        },
    })

    const letterDot = useSpring({
        from: { x: 200 },
        to: { x: 0 },
        config: {
            duration: baseDuration
        },
    })
    return (
        <div>
            <h1>Logo</h1>


            <div className='w-1/2'>
                <animated.svg id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1428.16 393.54" stroke="#AAFF00" strokeWidth={80} fill='none' opacity={opacity.opacity} >
                    <g id="Layer_1-2"><g>

                        <clipPath id="letterL">
                            <polygon points="482.23 70.68 482.23 306.2 532.19 306.2 532.19 70.68 532.19 0 482.23 0 482.23 70.68" />
                        </clipPath>
                        <animated.polygon clipPath='url(#letterL)' strokeDasharray={750} strokeDashoffset={letterL.x} points="482.23 70.68 482.23 306.2 532.19 306.2 532.19 70.68 532.19 0 482.23 0 482.23 70.68" />

                        <clipPath id="letterY">
                            <path d="M1371.22,81.29l-58.97,168.73-65.03-168.73h-56.3l94.51,232.57-2.79,6.47c-4.52,9.94-9.34,16.94-14.46,21.01-5.13,4.07-11.6,6.1-19.43,6.1-10.25,0-20.94-3.02-32.08-9.04l-18.53,40.67c17.77,9.64,36.6,14.46,56.49,14.46s34.79-5.05,46.54-15.14c11.75-10.09,22.44-27.34,32.08-51.74l94.9-245.37h-56.94Z" />
                        </clipPath>
                        <animated.path strokeDasharray={1300} strokeDashoffset={letterY.x} d="M1371.22,81.29l-58.97,168.73-65.03-168.73h-56.3l94.51,232.57-2.79,6.47c-4.52,9.94-9.34,16.94-14.46,21.01-5.13,4.07-11.6,6.1-19.43,6.1-10.25,0-20.94-3.02-32.08-9.04l-18.53,40.67c17.77,9.64,36.6,14.46,56.49,14.46s34.79-5.05,46.54-15.14c11.75-10.09,22.44-27.34,32.08-51.74l94.9-245.37h-56.94Z" clipPath='url(#letterY)' />

                        <clipPath id="letterI">
                            <rect x="962.33" y="81.29" width="53.3" height="224.93" />
                        </clipPath>
                        <animated.rect x="962.33" y="81.29" width="53.3" height="224.93" strokeDasharray={550} strokeDashoffset={letterI.x} clipPath='url(#letterI)' />


                        <clipPath id="letterDot">
                            <path d="M998.77,2.64c-23.7-7.69-45.28,13.88-37.59,37.59,2.76,8.5,9.5,15.25,18,18,23.71,7.69,45.28-13.89,37.59-37.59-2.76-8.5-9.5-15.24-18-18Z" />
                        </clipPath>
                        <animated.path clipPath='url(#letterDot)' strokeDasharray={200} strokeDashoffset={letterDot.x} d="M998.77,2.64c-23.7-7.69-45.28,13.88-37.59,37.59,2.76,8.5,9.5,15.25,18,18,23.71,7.69,45.28-13.89,37.59-37.59-2.76-8.5-9.5-15.24-18-18Z" />

                        <clipPath id="letterE">
                            <path d="M673,75.71c-65.36,0-120.55,51.62-120.55,116.98s55.18,119.88,120.55,119.88c45.31,0,84.63-27.02,104.51-64.42l-43.82-15.64c-12.98,19.76-35.29,32.84-60.7,32.84-33,0-60.85-22.01-69.71-52.14h186.24c1.17-6.67,1.81-13.52,1.81-20.52,0-65.36-52.99-116.98-118.35-116.98Zm-68.64,90.57c9.87-25.85,36.87-44.52,68.64-44.52s57.56,18.67,67.43,44.52h-136.07Z" />
                        </clipPath>
                        <animated.path clipPath='url(#letterE)' strokeDasharray={1200} strokeDashoffset={letterE.x} d="M673,75.71c-65.36,0-120.55,51.62-120.55,116.98s55.18,119.88,120.55,119.88c45.31,0,84.63-27.02,104.51-64.42l-43.82-15.64c-12.98,19.76-35.29,32.84-60.7,32.84-33,0-60.85-22.01-69.71-52.14h186.24c1.17-6.67,1.81-13.52,1.81-20.52,0-65.36-52.99-116.98-118.35-116.98Zm-68.64,90.57c9.87-25.85,36.87-44.52,68.64-44.52s57.56,18.67,67.43,44.52h-136.07Z" />


                        <clipPath id="letterT">
                            <path d="M1160.26,263.88c-19.59,0-29.37-9.94-29.37-29.83v-106.04h49.32v-47h-49.32V31.47h-50.28v49.54h-39.23v47h37.03v114.63c0,37.45,22.89,70.04,68.69,70.04,18.21,0,32.3-4.01,46.66-12-7.31-13.92-13.69-30.23-17.23-39.18-4.87,1-11.22,2.38-16.26,2.38Z" />
                        </clipPath>
                        <animated.path clipPath='url(#letterT)' strokeDasharray={1200} strokeDashoffset={letterT.x} d="M1160.26,263.88c-19.59,0-29.37-9.94-29.37-29.83v-106.04h49.32v-47h-49.32V31.47h-50.28v49.54h-39.23v47h37.03v114.63c0,37.45,22.89,70.04,68.69,70.04,18.21,0,32.3-4.01,46.66-12-7.31-13.92-13.69-30.23-17.23-39.18-4.87,1-11.22,2.38-16.26,2.38Z" />


                        <clipPath id="letterCE">
                            <path d="M341.68,75.82c-74.41,0-106.03,59.71-131.43,107.69-26.6,50.23-47.29,83.16-90.69,83.16s-73.45-30.44-73.45-72.38,30.89-73.73,73.45-73.73c25.58,0,43.26,11.45,58.92,31.12h0s27.03-39.4,27.03-39.4c-20.63-21.95-47.59-37.83-85.95-37.83C51.4,74.47,0,121.76,0,194.3c0,67.55,51.4,118.48,119.56,118.48,74.41,0,106.03-59.71,131.43-107.69,26.6-50.23,47.28-83.16,90.69-83.16,32.31,0,57.88,17.55,68.33,44.36h-110.09c-5.72,7.2-14.64,20.79-27.09,46.19h187.77s.64-3.67,.64-18.17c0-67.55-51.39-118.48-119.55-118.48Z" />
                        </clipPath>
                        <animated.path clipPath='url(#letterCE)' strokeDasharray={2200} strokeDashoffset={letterCE.x} d="M341.68,75.82c-74.41,0-106.03,59.71-131.43,107.69-26.6,50.23-47.29,83.16-90.69,83.16s-73.45-30.44-73.45-72.38,30.89-73.73,73.45-73.73c25.58,0,43.26,11.45,58.92,31.12h0s27.03-39.4,27.03-39.4c-20.63-21.95-47.59-37.83-85.95-37.83C51.4,74.47,0,121.76,0,194.3c0,67.55,51.4,118.48,119.56,118.48,74.41,0,106.03-59.71,131.43-107.69,26.6-50.23,47.28-83.16,90.69-83.16,32.31,0,57.88,17.55,68.33,44.36h-110.09c-5.72,7.2-14.64,20.79-27.09,46.19h187.77s.64-3.67,.64-18.17c0-67.55-51.39-118.48-119.55-118.48Z" />


                        <clipPath id="letterEFirst">
                            <path d="M341.68,266.67c-31.89,0-59.44-18.63-75.02-41.81-12.12,23.67-20.62,35.54-25.7,41.37,24.32,27.08,59.89,46.55,100.72,46.55,48.15,0,87.9-25.44,107.11-64.17l-43.97-15.69c-12.48,20.74-35.31,33.76-63.14,33.76Z" />
                        </clipPath>
                        <animated.path clipPath='url(#letterEFirst)' strokeDasharray={550} strokeDashoffset={letterEFirst.x} d="M341.68,266.67c-31.89,0-59.44-18.63-75.02-41.81-12.12,23.67-20.62,35.54-25.7,41.37,24.32,27.08,59.89,46.55,100.72,46.55,48.15,0,87.9-25.44,107.11-64.17l-43.97-15.69c-12.48,20.74-35.31,33.76-63.14,33.76Z" />

                        <clipPath id="letterR">
                            <path d="M890.98,82.26c-7.58,3.79-16.27,10.16-26.06,20.42v-21.4h-53.3v224.93h53.3v-113.03c0-72.74,49.69-63.18,73.2-54.96l1.04-56.62c-6.24-2.53-14.6-4.82-21.02-4.82-10.58,0-19.43,1.53-27.16,5.48Z" />
                        </clipPath>
                        <animated.path clipPath='url(#letterR)' strokeDasharray={750} strokeDashoffset={letterR.x} d="M890.98,82.26c-7.58,3.79-16.27,10.16-26.06,20.42v-21.4h-53.3v224.93h53.3v-113.03c0-72.74,49.69-63.18,73.2-54.96l1.04-56.62c-6.24-2.53-14.6-4.82-21.02-4.82-10.58,0-19.43,1.53-27.16,5.48Z" />
                    </g></g>
                </animated.svg>

            </div>
        </div>
    )
}

export default Logo