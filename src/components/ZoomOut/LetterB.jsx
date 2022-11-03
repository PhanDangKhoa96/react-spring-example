import React from 'react'
import { useEffect, useRef } from 'react';
import { useWindowScroll } from 'react-use';
import Eye from './Eye';


const LetterB = () => {
    const { y } = useWindowScroll()
    const ref = useRef(null)

    useEffect(() => {
        y > 900 ? ref.current.classList.add('letter-b-clip') : ref.current.classList.remove('letter-b-clip')
    }, [y])
    return (
        <div className='relative grid place-items-center letter-b'>
            <div className='flex flex-wrap items-start justify-start gap-[29px] overflow-hidden w-[666px] h-[700px] ' ref={ref}>
                {
                    [...Array(100).keys()].map((item, index) => {
                        return <Eye key={item} className={index === 54 ? 'eye' : `eye-small ${index}`} bgClass={index === 54 ? true : false} />
                    })
                }
            </div>
        </div>
    )
}

export default LetterB