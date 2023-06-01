import { Data } from "src/App";
import ResultBackgroundImage from "src/Resource/result-background-image.png";
import CocaColaSymbolImage from "src/Resource/coca-cola-symbol-image.png";
import PepsiSymbolImage from "src/Resource/pepsi-symbol-image.png";
import "./result.css";

/**
 * 단순 콜라 vs 펩시 결과 페이지
 */
export const Result = ({ data }: { data: Data[] }) => {
  const cokeSelection = data.filter((d) => d.selection === "COKE");

  const cokeFlex = cokeSelection.length > 1 ? cokeSelection.length : 1;
  const pepsiFlex =
    data.length - cokeSelection.length > 1
      ? data.length - cokeSelection.length
      : 1;

  return (
    <div className="result__container" style={{ position: "relative" }}>
      {/* 배경 파트 */}
      <img
        className="result__background"
        src={ResultBackgroundImage}
        style={{ width: "100%" }}
      />
      <div className="result__scrim" />

      <div className="result__content__container">
        <div className="result__column" style={{ flex: 1 }} />

        <div
          className="result__column"
          style={{ flex: 1, justifyContent: "flex-end" }}
        >
          <span
            className="result__title__text"
            style={{ marginBottom: "16px" }}
          >
            신제품 제로콜라
          </span>
          <span
            className="result__title__text"
            style={{ fontSize: "5rem", fontWeight: "bold" }}
          >
            BLIND TEST 결과
          </span>
        </div>

        <div
          className="result__column"
          style={{ flex: 8, justifyContent: "flex-end" }}
        >
          <div className="result__graph__container">
            <div
              id="coke"
              className="result__graph__filler"
              style={{ flex: cokeFlex }}
            >
              <img src={CocaColaSymbolImage} style={{ height: "80px" }} />
            </div>
            <div
              id="pepsi"
              className="result__graph__filler"
              style={{ flex: pepsiFlex }}
            >
              <img src={PepsiSymbolImage} style={{ height: "80px" }} />
            </div>
          </div>
          <div className="result__graph__text__row">
            <span className="result__graph__text">{`${
              Math.floor((cokeSelection.length / data.length) * 1000) / 10
            }%`}</span>
            <span className="result__graph__text">{`${
              Math.floor(
                ((data.length - cokeSelection.length) / data.length) * 1000
              ) / 10
            }%`}</span>
          </div>
        </div>

        <div className="result__column" style={{ flex: 1 }}></div>
      </div>
    </div>
  );
};
