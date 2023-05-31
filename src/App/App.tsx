import { useState, useEffect } from "react";
import axios from "axios";
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

export type Data = {
  preference: string;
  selection: string;
  agegroup: string;
  gender: string;
};

export const App = () => {
  const [data, setData] = useState<Data[]>([]);

  const getNewerData = () => {
    axios
      .request<Data[]>({
        method: "GET",
        url: "https://api.pickply.com/marketing/nextrise",
        headers: { "Acess-Control-Allow-Origin": "*" },
      })
      .then((res) => setData(res.data));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === " ") {
      getNewerData();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className="app container">
      <Swiper
        // modules={[Autoplay]}
        // autoplay={{
        //   delay: 2800,
        //   disableOnInteraction: true,
        // }}
        // style={{
        //   width: "100%",
        //   height: "100%",
        //   border: "20px solid yellow",
        // }}
        slidesPerView={1}
      >
        <SwiperSlide>
          <Landing />
        </SwiperSlide>
        <SwiperSlide>
          <Result data={data} />
        </SwiperSlide>
        <SwiperSlide>
          <DemoResult data={data} />
        </SwiperSlide>
        <SwiperSlide>
          <Pickply />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
