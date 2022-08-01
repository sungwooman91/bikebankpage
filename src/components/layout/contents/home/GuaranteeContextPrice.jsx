import React from "react";
import styled from "styled-components";
import priceArea from "../image/main_price_area.png";

const GuaranteeDiv = styled.div`
  width: 100%;
  padding: 168px 0 251px 0;

  .title {
    position: relative;
    width: 1080px;
    margin: 0 auto;
  }

  .exp {
    font-size: 38px;
    line-height: 52px;
    letter-spacing: -0.95px;
    font-weight: bold;
    color: #000;
  }
  .exp_02 {
    padding-top: 22px;
    font-size: 20px;
    line-height: 32px;
    color: #5d5d5d;
  }
  .num {
    font-size: 38px;
    color: #000;
    font-family: "sf" !important;
    position: absolute;
    right: 0;
    top: 0;
    font-weight: bold;
  }
  .area {
    width: 100%;
    text-align: center;
    padding-top: 52px;
    opacity: 1;
    transform: translate(0px, 0px);
  }
  .area > p {
    width: 1080px;
    margin: 0 auto;
    text-align: right;
    font-size: 18px;
    letter-spacing: -0.45px;
    padding-top: 8px;
    font-weight: 400;
    color: #5d5d5d;
  }
`;

const GuaranteeContextPrice = () => {
  return (
    <GuaranteeDiv>
      <div className="title">
        <p className="exp">
          배달용 오토바이 필요할 때<br />
          비용부담을 줄이도록
        </p>
        <p className="exp_02">
          오토바이 구입비에 보험 가입비까지
          <br />
          갑작스러운 비용 증가가 부담된다면 바이크 뱅크 렌트 상품
        </p>
        <p className="num">03</p>
      </div>
      <div className="area">
        <a href>
          <img src={priceArea} alt="price_area"></img>
        </a>
        <p>23세 남자/ 125cc/ 소모품 교체기준, 차량에 따라 달라질 수 있습니다</p>
      </div>
    </GuaranteeDiv>
  );
};

export default GuaranteeContextPrice;
