import React from "react";
import Image from "next/image";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
// SWIPER STYLES
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// IMAGES
import bg1 from "../assets/bg1.jpeg";
import bg2 from "../assets/bg2.jpeg";
import bg3 from "../assets/bg3.jpeg";
import bg4 from "../assets/bg4.jpeg";

const Carousel = () => {
  const bgImages = [bg1, bg2, bg3, bg4];

  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      loop={"true"}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      {bgImages?.map((val, index) => {
        return (
          <SwiperSlide key={index}>
            <Image className="sliderImage" src={val} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
