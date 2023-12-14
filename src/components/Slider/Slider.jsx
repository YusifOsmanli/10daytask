import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Autoplay, Pagination } from 'swiper/modules';
const Slider = () => {
  return (
    <Swiper 
    pagination={true}
     modules={[Pagination,Autoplay]} 
     className="swiper"
     autoplay={{
      delay:1500,
      disableOnInteraction: false
     }}>
      <div>
        asdasd
      </div>
        <SwiperSlide className='swiper-slide '><img style={{height:'400px',width:'50%'}} src="https://htmldemo.net/pustok/pustok/image/bg-images/home-slider-2-ai.png" alt="" />
        <div className='text'>
     bnkedbbjcejchh
        </div>
        
        </SwiperSlide>
        <SwiperSlide className='swiper-slide '>Slide 2</SwiperSlide>
      </Swiper>
  )
}

export default Slider