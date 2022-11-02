import React from 'react'
import Eye from './Eye';

const LetterN = () => {
  return (
    <div className='relative grid place-items-center letter'>
    <div className='flex flex-wrap items-start justify-start gap-1 bg-white overflow-hidden w-[666px] h-[700px] letter-n-clip'>
        {
            [...Array(1400).keys()].map((item) => {
                return <Eye key={item} />
            })
        }
    </div>
</div>
  )
}

export default LetterN