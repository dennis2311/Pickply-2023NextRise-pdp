import { Data } from "src/App";
import "./demoResult.css";

/**
 * 성별, 연령별 결과 페이지
 */
export const DemoResult = ({ data }: { data: Data[] }) => {
  return (
    <div className="demo__container">
      <div className="demo__row" style={{ flex: 2 }}>
        <div
          className="demo__title__horline"
          style={{ backgroundColor: "#5640dd" }}
        />
        <div className="demo__title__container">실시간 절대 미각 순위</div>
        <div
          className="demo__title__horline"
          style={{ backgroundColor: "#8f84d0" }}
        />
      </div>

      <div className="demo__row" style={{ flex: 3 }}>
        <div className="demo__1st__card__container">
          <div className="demo__1st__card__header">1위</div>
          <div className="demo__1st__card__body">{`20대 여성`}</div>
        </div>
      </div>

      <div className="demo__row" style={{ flex: 3 }}>
        <div className="demo__card__container">
          <div className="demo__card__header">2위</div>
          <div className="demo__card__body">{`20대 남성`}</div>
        </div>

        <div className="demo__card__container">
          <div className="demo__card__header">3위</div>
          <div className="demo__card__body">{`20대 남성`}</div>
        </div>

        <div className="demo__card__container">
          <div className="demo__card__header">4위</div>
          <div className="demo__card__body">{`20대 남성`}</div>
        </div>
      </div>

      <div className="demo__row" style={{ flex: 1 }} />
    </div>
  );
};
