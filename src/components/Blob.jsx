import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Blob = () => {
    const blob = [
        "M75.9 -68.7C93.4 -13.6 99.1 23.5 84.5 54.9C69.9 86.3 34.9 112.2 -15 120.8C-65 129.5 -129.9 121 -155.7 83.1C-181.6 45.2 -168.3 -22.2 -135.8 -85.9C-103.3 -149.7 -51.7 -209.8 -11.2 -203.4C29.2 -196.9 58.5 -123.8 75.9 -68.7",
        "M152.6 -116.2C167.2 -62.8 127.5 -6.1 93 53.5C58.5 113.1 29.2 175.5 -13.7 183.4C-56.6 191.3 -113.2 144.7 -135.5 92.1C-157.9 39.5 -146.1 -19 -117.8 -80.3C-89.5 -141.7 -44.7 -205.8 12.1 -212.8C69 -219.8 138 -169.7 152.6 -116.2"
    ]

    const [toggle, setToggle] = useState(false)

    // const blobAnimation = useSpring({
    //     from: { x: blob[0] },
    //     to: { x: blob[1] },
    //     config: {
    //         duration: 3000
    //     },
    // })

    const blobAnimation = useSpring({
        x: toggle ? blob[0] : blob[1],
        config: {
            duration: 3000
        }
    })

    // useEffect(() => {
    //     const interval = () => {
    //         setInterval(() => {
    //             setToggle(!toggle)
    //             console.log(toggle);
    //         }, 3000);
    //     }
    //     interval()
    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [toggle])



    return (
        <div className='min-h-screen relative grid place-items-center'>
            <div className='grid place-items-center absolute top-0 left-0 w-full h-full' >
                <svg
                    id="visual"
                    viewBox="0 0 960 540"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    onClick={() => {
                        setToggle(!toggle)
                    }}
                >
                    <g transform="translate(518.2711851868296 309.97175888369816)">
                        <animated.path

                            d={blobAnimation.x}
                            fill="#000"
                        ></animated.path>
                    </g>
                </svg>
            </div>

            <h1 className='relative text-white font-bold text-5xl'>Hello world</h1>
        </div>

    );
};

export default Blob;
