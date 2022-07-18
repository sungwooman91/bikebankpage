import React from "react";
import styled from "styled-components";

const GuaranteeDiv = styled.div`
  width: 100%;
  padding: 165px 0 237px 0;
  display: block;

  div {
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
  .guar_list {
    text-align: center;
    padding-top: 50px;
    padding-bottom: 30px;
  }
  .guar_list > li {
    transform: translate(0px, 0px);
    opacity: 1;
    width: 344px;
    height: 200px;
    display: inline-block;
    margin-right: 24px;
    border-radius: 15px;
    box-shadow: 5px 0 30px 0 rgb(125 125 125 / 16%);
  }
  .guar_list > li > .exp {
    padding-top: 9px;
    font-size: 38px;
    color: #ffc400;
    line-height: 54px;
    font-weight: bold;
  }

  .guar_list > li > .title {
    font-size: 24px;
    line-height: 36px;
    color: #000;
    font-weight: bold;
    padding-top: 50px;
  }
`;

const GuaranteeContext = () => {
  return (
    <GuaranteeDiv>
      <div>
        <p className="exp">
          배달용 이륜차 선택할 때<br />
          핵심은 보장 범위
        </p>
        <p className="exp_02">
          긴 시간을 주행하는 라이더에게는 사고 발생시 보장 범위가 중요합니다.
          <br />
          보장 범위를 비교하고 상품을 선택하세요.
        </p>
        <p className="num">01</p>
      </div>
      <ul className="guar_list">
        <li>
          <p className="title">대인보장</p>
          <p className="exp">무 한</p>
        </li>
      </ul>
      <ul className="guar_list">
        <li>
          <p className="title">대물보장</p>
          <p className="exp">2억원</p>
        </li>
      </ul>
      <ul className="guar_list">
        <li>
          <p className="title">라이더 추가보장</p>
          <p className="exp">상해보험</p>
        </li>
      </ul>
    </GuaranteeDiv>
  );
};

export default GuaranteeContext;
