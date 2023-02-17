import React, { useEffect, useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './slider.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper'

export default function Slider({ content, my_swiper, handleSwiper }) {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    // dynamicHeight: window.innerHeight
  })
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      //   dynamicHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', setDimension)

    return () => {
      window.removeEventListener('resize', setDimension)
    }
  }, [screenSize])

  return (
    <div className="h-[100vh] flex justify-center items-center p-5 gap-5">
      <Swiper
        onInit={handleSwiper}
        // initialSlide={0}
        slidesPerView={screenSize.dynamicWidth < 768 ? 1 : 4}
        spaceBetween={20}
        centeredSlides={screenSize.dynamicWidth < 768 ? true : false}
        // centeredSlides={false}
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        // breakpoints={{
        //   375: {
        //     slidesPerView: 1,
        //   },

        // }}
        // pagination={{
        //   clickable: true
        // }}
        className="mySwiper"
      >
        {[1,2,2,2].map((item) => {
          return (
            <SwiperSlide key={'slider'}>
              <div className="w-[250px] h-[200px] bg-slate-300">
                <p>hello world</p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
