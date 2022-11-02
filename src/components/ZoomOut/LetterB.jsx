import React from 'react'
import Eye from './Eye';


const LetterB = () => {
    return (
        <div className='relative grid place-items-center letter-b'>
            <div className='flex flex-wrap items-start justify-start gap-[29px] overflow-hidden w-[666px] h-[700px] letter-b-clip'>
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