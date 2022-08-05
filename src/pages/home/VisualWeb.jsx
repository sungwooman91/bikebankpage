import React from "react";
import styled from "styled-components";
import backimager from "../image/main_visual_bg_01.jpg";
// eslint-disable-next-line
const VisualDiv = styled.div`
  height: 970px;

  .visual_wrap {
    display: block;
    width: 100%;
    height: 970px;
    background-image: url(${backimager});
    position: relative;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: auto 100%;
  }
  .visual_wrap > p {
    font-size: 60px;
    color: #fff;
    line-height: 75px;
    width: 1080px;
    margin: 0 auto;
    padding-top: 452px;
  }

  .visual_wrap > p > span {
    font-weight: bold;
  }
  .visual_wrap > button {
    width: 228px;
    height: 65px;
    border-radius: 33px;
    background-color: #ffce30;
    position: absolute;
    bottom: 151px;
    left: 50%;
    margin-left: -540px;
    font-size: 19px;
    text-align: center;
    cursor: pointer;
  }
`;

const VisualWeb = () => {
  return (
    <VisualDiv>
      <div className="visual_wrap">
        <p>
          No.1
          <br />
          비즈니스 이륜차 솔루션
          <br />
          <span>바이크뱅크</span>
        </p>
        <button type="button" onClick="#">
          렌트상품 알아보기
        </button>
      </div>
    </VisualDiv>
  );
};

export default VisualWeb;
