import LandingBackgroundImage from "src/Resource/landing-background-image.png";
import "./landing.css";

/**
 * 펩시 vs 콜라 랜딩 페이지
 */
export const Landing = () => {
  return (
    <div
      className="page-container"
      style={{
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      {/* 배경 파트 */}
      <img
        className="background"
        src={LandingBackgroundImage}
        style={{ width: "100%" }}
      />
      <div className="scrim" />

      {/* 내용 파트 */}
      <div className="content container">
        <span className="content__text">코카콜라가 맛있다고? 들어와</span>
        <span className="content__text bold" style={{ fontSize: "5rem" }}>
          ZERO COKE
        </span>
        <span className="content__text bold" style={{ fontSize: "4rem" }}>
          BLIND TEST
        </span>
      </div>
    </div>
  );
};
