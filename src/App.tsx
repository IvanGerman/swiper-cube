import React, { FC, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import './App.css';

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { EffectCube, Pagination, Autoplay } from "swiper";

import Image1 from './assets/images/mech-filter1.jpg';
import Image2 from './assets/images/mech-filter2.jpg';
import Image3 from './assets/images/osmos-filter1.jpg';
import Image4 from './assets/images/osmos-filter2.jpg';
import Image5 from './assets/images/ugol-filter1.jpg';
import Image6 from './assets/images/ugol-filter2.jpg';


const App: FC = () => {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={ { delay: 1000 } }
        pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img src={Image1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default App;
