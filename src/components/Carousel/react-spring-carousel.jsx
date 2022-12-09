import React, { useEffect, useState } from 'react'
import { useTransitionCarousel, useSpringCarousel } from 'react-spring-carousel'

const Carousel = () => {
    const mockItems = [
        {
            id: 'item-1',
            title: 'slide 1'
        },
        {
            id: 'item-2',
            title: 'slide 2'
        },
        {
            id: 'item-3',
            title: 'slide 3'
        }
    ]
    const [currentSlide, setCurrentSlide] = useState(mockItems[0].id)

    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem,
        useListenToCustomEvent
    } = useSpringCarousel({
        itemsPerSlide: 3,
        // slideType: 'fluid',
        withLoop: true,
        initialStartingPosition: 'center',
        gutter: 24,
        items: mockItems.map((item) => {
            return {
                ...item,
                renderItem: (
                    <div
                        className={`grid aspect-[2] w-full place-items-center  text-2xl text-white transition-all duration-700 ${
                            currentSlide === item.id
                                ? 'z-10 scale-150 bg-yellow-600'
                                : 'bg-violet-500'
                        }`}>
                        {item.title}
                    </div>
                )
            }
        })
    })

    useListenToCustomEvent((event) => {
        console.log(event)
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id)
        }
    })

    return (
        <div className="">
            <button onClick={slideToPrevItem}>Prev item</button>
            <div className="mx-auto w-[80%] overflow-x-clip py-[4%]">
                {carouselFragment}
            </div>
            <button onClick={slideToNextItem}>Next item</button>
        </div>
    )
}

export default Carousel
