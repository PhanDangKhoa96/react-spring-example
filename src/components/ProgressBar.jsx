import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useSpring, animated, config } from 'react-spring'

const ProgressBar = () => {
    const progressBar = useRef(null)

    const [goodAnimation, goodApi] = useSpring(() => ({
        from: {
            width: '0%',
            figure: 0
        }
    }))

    const [improveAnimation, improveApi] = useSpring(() => ({
        from: {
            width: '0%',
            figure: 0
        }
    }))

    useEffect(() => {
        const entry = progressBar.current
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                let baseDuration = 2000
                let baseDelay = 1000
                goodApi.start({
                    to: { width: `30%`, figure: 30 },
                    delay: baseDelay,
                    config: { ...config.molasses, duration: baseDuration }
                })

                baseDelay += baseDuration

                improveApi.start({
                    to: { width: `70%`, figure: 70 },
                    delay: baseDelay,
                    config: { ...config.gentle, duration: baseDuration }
                })

                observer.unobserve(entry)
            }
        })
        observer.observe(entry)
        return () => observer.unobserve(entry)
    }, [])

    return (
        <div className="p-10 text-center" ref={progressBar}>
            <div className="inline-flex gap-x-4 text-xl py-[6px] px-6 rounded-[25px] border border-solid border-[#D1D1D1] mb-20">
                <span>
                    Good:{' '}
                    <strong>
                        <animated.span>
                            {goodAnimation.figure.to(n => n.toFixed(0))}
                        </animated.span>
                        %
                    </strong>
                </span>
                <span>
                    Need Improvement:{' '}
                    <strong>
                        <animated.span>
                            {improveAnimation.figure.to(n => n.toFixed(0))}
                        </animated.span>
                        %
                    </strong>
                </span>
            </div>


            <div className="overflow-hidden rounded-[20px] flex h-[9px] md:h-4">
                <animated.div
                    style={{
                        width: goodAnimation.width
                    }}
                    className="h-full w-0 bg-[#18C773]"
                ></animated.div>
                <animated.div
                    style={{
                        width: improveAnimation.width
                    }}
                    className="h-full w-0 bg-[#E9D20A]"
                ></animated.div>
            </div>
        </div>
    )
}

export default ProgressBar