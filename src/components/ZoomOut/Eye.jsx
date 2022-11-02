import React from 'react'

const Eye = ({ className, bgClass = false }) => {
    return (
        <div className={`w-[40px] aspect-square rounded-full bg-black grid place-items-center relative isolate ${className}`}>
            <div className={`absolute z-[-1] bg-black inset-0 rounded-full ${bgClass ? 'curtain' : ''}`}></div>
            <img src="/eye.svg" alt="" className='w-[16px] eye-image' />
        </div>
    )
}

export default Eye