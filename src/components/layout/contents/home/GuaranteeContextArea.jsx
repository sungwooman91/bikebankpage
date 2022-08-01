import React from "react";
import styled from "styled-components";

import ServiceArea from "../image/main_service_area.png";

const GuaranteeDiv = styled.div`
  width: 100%;
  padding: 118px 0 114px 0;
  background-color: #f8f8f8;

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

  .area {
    position: relative;
    width: 100%;
    text-align: center;
  }
`;

const GuaranteeContextArea = () => {
  return (
    <GuaranteeDiv className="service_area">
      <div>
        <p class="exp">
          전국 370개 이상의
          <br />
          서비스망으로 확실하게
        </p>
        <p class="exp_02">
          배달 권역별로 서비스망을 확보하여 이륜차 운용에 필요한
          <br />
          소모품 무료 교환과 사고 발생시 수리를 책임집니다.
        </p>
        <p className="num">02</p>
      </div>
      <div class="area">
        <a href="/service">
          <img src={ServiceArea} alt="서비스 지역" />
        </a>
      </div>
    </GuaranteeDiv>
  );
};

export default GuaranteeContextArea;
