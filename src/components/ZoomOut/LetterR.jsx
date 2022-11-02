import React from 'react'
import Eye from './Eye';

const LetterR = () => {
    return (
        <div className='relative grid place-items-center letter'>
            <div className='flex flex-wrap items-start justify-start gap-1 bg-white overflow-hidden w-[645px] h-[700px] letter-r-clip'>
                {
                    [...Array(1400).keys()].map((item) => {
                        return <Eye key={item} />
                    })
                }
            </div>
        </div>
    )
}

export default LetterR