import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "./pickply.css";
import PickplyBackgroundImage from "src/Resource/pickply-background-image.png";

SwiperCore.use([Autoplay]);

/**
 * 픽플리 소개 - 마지막 페이지
 */
export const Pickply = () => {
  return (
    <div
      className="page-container"
      style={{
        position: "relative",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}
    >
      <img src={PickplyBackgroundImage} style={{ width: "auto" }} />

      <div className="pickply__content container">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "8px",
          }}
        >
          <Swiper
            className="word_swiper container"
            modules={[Autoplay]}
            autoplay={{ delay: 600 }}
          >
            <SwiperSlide className="word_swiper item">커리어</SwiperSlide>
            <SwiperSlide className="word_swiper item">패션</SwiperSlide>
            <SwiperSlide className="word_swiper item">진로</SwiperSlide>
            <SwiperSlide className="word_swiper item">고민</SwiperSlide>
            <SwiperSlide className="word_swiper item">사랑</SwiperSlide>
          </Swiper>
          <span className="pickply__content text">{` 에 정답이 필요할 때`}</span>
        </div>
        <br />
        <span
          className="pickply__content text"
          style={{ fontSize: "6.4rem", marginBottom: "32px" }}
        >
          성별, 나이별로
        </span>
        <br />
        <span className="pickply__content text">답을 한눈에!</span>
      </div>
    </div>
  );
};
