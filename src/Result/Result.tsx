import ResultBackgroundImage from "src/Resource/result-background-image.png";
import "./result.css";

/**
 * 단순 콜라 vs 펩시 결과 페이지
 */
export const Result = () => {
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
        src={ResultBackgroundImage}
        style={{ width: "100%" }}
      />
      <div className="scrim" />
    </div>
  );
};
