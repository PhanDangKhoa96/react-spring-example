import React, { useState } from 'react'
import { useTrail, animated, to, config } from 'react-spring';

const Trail = () => {
    const imgList = [
        "https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg",
        "https://images.pexels.com/photos/1000654/pexels-photo-1000654.jpeg",
        "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg",
        "https://images.pexels.com/photos/3100361/pexels-photo-3100361.jpeg"
    ]
    const [trail, api] = useTrail(imgList.length, () => ({
        trail: 6000,
        opacity: 1,
        sc: 0.9,
        x: "0%",
        y: "0px",
        skewX: 0,
        from: {
            opacity: 0,
            sc: 0.8,
            x: "100%",
            y: "100px",
            skewX: 20
        }
    }));

    const [toggle, setToggle] = useState(false)

    // const trail = useTrail(imgList.length, {

    //     config: {
    //         duration: 500
    //     },
    //     opacity: toggle ? 1 : 0,
    //     x: toggle ? "100px" : "0px",

    //     skewX: toggle ? 20 : 0
    // });


    return (
        <div>
            <h1 onClick={() => { setToggle(!toggle) }}>Hello world</h1>
            <div className='grid grid-cols-4 gap-5'>
                {
                    trail.map(({ sc, x, y, skewX, ...props }, i) => {
                        return (
                            <animated.div
                                key={i}
                                style={{
                                    ...props,
                                    transform: to(
                                        [sc, x, y, skewX],
                                        (sc, x, y, skewX) =>
                                            `translate(${x}, ${y}) skewX(${skewX}deg)`
                                    )
                                }}
                            >
                                <div className='w-full aspect-square bg-red-300'></div>
                            </animated.div>
                        )
                    }
                    )
                }
            </div>
        </div >
    )
}

export default Trail