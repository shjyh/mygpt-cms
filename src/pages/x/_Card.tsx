import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

import { useState } from "react";

export interface CardProps {
    images: string[];
}

export default function Card(props: CardProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="tw-relative">
            <Swiper
                modules={[Pagination]}
                loop={false}
                onSlideChange={s => setCurrentIndex(s.realIndex)}
                pagination={{
                    el: ".pagination",
                    dynamicBullets: true,
                    dynamicMainBullets: 3
                }}
            >
                {
                    props.images.map(img => (
                        <SwiperSlide key={img}>
                            <img src={img} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            <div 
                className="tw-absolute tw-top-4 tw-right-4 tw-z-10 tw-text-xs tw-text-white tw-bg-gray-600 tw-opacity-90 tw-px-2 tw-py-1 tw-rounded-2xl"
            >{currentIndex + 1}/{props.images.length}</div>
            <div className="pagination tw-py-4 tw-mx-auto"></div>
        </div>
    )
}