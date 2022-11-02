import React from 'react'

const PositionExample = () => {
    return (
        <div class="content">
            {/* <div class="content__container">
                <p class="content__container__text">
                    Hello
                </p>

                <ul class="content__container__list ">
                    <li class="content__container__list__item">world !</li>
                    <li class="content__container__list__item">bob !</li>
                    <li class="content__container__list__item">users !</li>
                    <li class="content__container__list__item">everybody !</li>
                </ul>
            </div> */}

            <div className='flex items-center'>
                <p>hello</p>
                <div className='relative'>a
                    <p className='absolute item item-1' data-delay="0s">world!</p>
                    <p className='absolute item item-2' data-delay="3s">bob!</p>
                    <p className='absolute item item-3' data-delay="6s">users!</p>
                </div>
            </div>

        </div>
    )
}

export default PositionExample