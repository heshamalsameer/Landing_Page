import { Swiper, SwiperSlide } from 'swiper/react';
import {A11y,Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const vedio = [
    '../Videos/one.mp4',
    '../Videos/two.mp4',
    '../Videos/three.mp4'
];

export const  Slider = () => {
    return (
        <div className='swiper'>
    <Swiper
        loop={true}
        autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
        centeredSlides={true}
        modules={[Autoplay, A11y]}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
                <SwiperSlide>
                <video src={require('../Videos/one.mp4')}  className='video w-full' autoPlay  loop muted/>
                </SwiperSlide>
                <SwiperSlide>
                <video src={require('../Videos/two.mp4')}  className='video w-full' autoPlay  loop muted/>
                </SwiperSlide>
                <SwiperSlide>
                <video src={require('../Videos/three.mp4')}  className='video w-full' autoPlay  loop muted/>
                </SwiperSlide>
    </Swiper>
        </div>
);
};