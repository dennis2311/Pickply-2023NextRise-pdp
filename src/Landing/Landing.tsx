import LandingBackgroundImage from "src/Resource/landing-background-image.png";
import UnknownCanImage from "src/Resource/unknown-can-image.png";
import "./landing.css";

/**
 * 펩시 vs 콜라 랜딩 페이지
 */
export const Landing = () => {
  return (
    <div className="landing__container">
      {/* 배경 파트 */}
      <img
        className="landing__background"
        src={LandingBackgroundImage}
        style={{ width: "100%" }}
      />
      <div className="landing__scrim" />

      {/* 내용 파트 */}
      <div className="landing__content__container">
        <div className="landing__text__container">
          <span className="landing__text" style={{ marginBottom: "8px" }}>
            제로콜라가 맛있다고? 들어와
          </span>
          <span className="landing__text bold" style={{ fontSize: "5rem" }}>
            ZERO COKE
          </span>
          <span className="landing__text bold" style={{ fontSize: "4rem" }}>
            BLIND TEST
          </span>
        </div>

        <img src={UnknownCanImage} />
      </div>
    </div>
  );
};
