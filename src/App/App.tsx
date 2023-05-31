import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Landing } from "src/Landing";
import { Result } from "src/Result";
import { DemoResult } from "src/DemoResult";
import { Pickply } from "src/Pickply";
import "./App.css";
import "swiper/css";
import "swiper/css/autoplay";

SwiperCore.use([Autoplay]);

export const App = () => {
  return (
    <div className="app container">
      <Swiper
        // modules={[Autoplay]}
        // autoplay={{
        //   delay: 2800,
        //   disableOnInteraction: true,
        // }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Landing />
        </SwiperSlide>
        <SwiperSlide>
          <Result />
        </SwiperSlide>
        <SwiperSlide>
          <DemoResult />
        </SwiperSlide>
        <SwiperSlide>
          <Pickply />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
