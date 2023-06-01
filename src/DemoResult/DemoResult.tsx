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
    const correctRatio = Math.floor((correctCount / count) * 1000) / 10;
    return { gender, ageGroup, correctRatio };
  });

  // 정답률에 따라 내림차순으로 정렬합니다.
  result.sort((a, b) => b.correctRatio - a.correctRatio);

  const getGenderText = (gender: string) => {
    switch (gender) {
      case "MALE":
        return "남성";
      case "FEMALE":
        return "여성";
    }
  };

  const getAgeGroupText = (ageGroup: string) => {
    switch (ageGroup) {
      case "TEEN":
        return "10대";
      case "TWENTY":
        return "20대";
      case "THIRTY":
        return "30대";
      case "FOURTY":
        return "40대";
      case "FIFTY":
        return "50대";
      case "SIXTY":
        return "60대";
    }
  };

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
          <div className="demo__1st__card__body">
            {result.length >= 1
              ? `${getAgeGroupText(result[0].ageGroup)} ${getGenderText(
                  result[0].gender
                )}`
              : "?"}
          </div>
        </div>
      </div>

      <div className="demo__row" style={{ flex: 3 }}>
        <div className="demo__card__container">
          <div className="demo__card__header">2위</div>
          <div className="demo__card__body">
            {result.length >= 2
              ? `${getAgeGroupText(result[1].ageGroup)} ${getGenderText(
                  result[1].gender
                )}`
              : "?"}
          </div>
        </div>

        <div className="demo__card__container">
          <div className="demo__card__header">3위</div>
          <div className="demo__card__body">
            {result.length >= 3
              ? `${getAgeGroupText(result[2].ageGroup)} ${getGenderText(
                  result[2].gender
                )}`
              : "?"}
          </div>
        </div>

        <div className="demo__card__container">
          <div className="demo__card__header">4위</div>
          <div className="demo__card__body">
            {result.length >= 4
              ? `${getAgeGroupText(result[3].ageGroup)} ${getGenderText(
                  result[3].gender
                )}`
              : "?"}
          </div>
        </div>
      </div>

      <div className="demo__row" style={{ flex: 1 }} />
    </div>
  );
};
