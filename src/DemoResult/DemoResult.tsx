import { Data } from "src/App";
import "./demoResult.css";

/**
 * 성별, 연령별 결과 페이지
 */
export const DemoResult = ({ data }: { data: Data[] }) => {
  const groupCount = {};
  const groupCorrectCount = {};

  // 그룹별로 정답 개수와 총 개수를 계산합니다.
  data.forEach(({ preference, selection, gender, ageGroup }) => {
    const key = `${gender}-${ageGroup}`;
    groupCount[key] = (groupCount[key] || 0) + 1;
    if (preference === selection) {
      groupCorrectCount[key] = (groupCorrectCount[key] || 0) + 1;
    }
  });

  // 정답률을 계산하고 결과를 배열로 변환합니다.
  const result = Object.entries(groupCount).map(([key, count]) => {
    const [gender, ageGroup] = key.split("-");
    const correctCount = groupCorrectCount[key] || 0;
    const correctRatio = (correctCount / count) * 100;
    return { gender, ageGroup, correctRatio };
  });

  // 정답률에 따라 내림차순으로 정렬합니다.
  result.sort((a, b) => b.correctRatio - a.correctRatio);

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
          <div className="demo__card__body">{`30대 남성`}</div>
        </div>

        <div className="demo__card__container">
          <div className="demo__card__header">3위</div>
          <div className="demo__card__body">{`30대 여성`}</div>
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
