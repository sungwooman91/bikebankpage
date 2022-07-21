import React from "react";
import styled from "styled-components";
import backimager from "./image/main_rent.png";
// eslint-disable-next-line
const VisualDiv = styled.div`
  margin-top: 40px;

  .visual_wrap {
    height: 600px;
    /* height: 970px; */
    background: url(${backimager}) no-repeat;
    background-position: 50% 50%;
    background-size: auto 100%;
  }
  .visual_wrap p {
    color: #fff;
    font-size: 60px;
    line-height: 75px;
    margin: 0 auto;
  }
  .visual_wrap span {
    font-weight: bold;
  }
  .visual_wrap button {
    width: 228px;
    height: 65px;
    border-radius: 33px;
    background-color: #ffce30;
    /* position: absolute; */
    /* bottom: 151px; */
    left: 50%;
    /* margin-left: -540px; */
    margin-top: 300px;
    font-size: 20px;
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
        </p>
        <p>
          <span>바이크뱅크</span>
        </p>
        <button type="button" onclick="#">
          렌트상품 알아보기
        </button>
      </div>
    </VisualDiv>
  );
};

export default VisualWeb;
