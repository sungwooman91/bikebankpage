import React from "react";
import styled from "styled-components";

import { useScrollFadeIn } from "../../hook/useScrollFadeIn";
import bgImage from "../image/background_yellow_02.jpg";

export const ServiceComponent = styled.div`
  width: 1194px;
  margin: 0 auto;
  height: 300px;
  border-radius: 15px;
  box-shadow: 10px 0 30px 0 rgb(149 149 149 / 16%);
  background-image: url(${bgImage});
  background-size: 100% 200px;
  background-repeat: no-repeat;
  position: relative;

  .title {
    padding: 43px 0 0 57px;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.6px;
    font-weight: bold;
  }

  .num {
    padding-left: 57px;
    font-size: 38px;
    font-family: "sf" !important;
    padding-top: 18px;
    font-weight: bold;
  }

  .exp {
    padding: 47px 0 0 57px;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.5px;
    color: #5d5d5d;
  }

  .btn_call {
    position: absolute;
    top: 95px;
    right: 57px;
    width: 268px;
    height: 70px;
    background-color: #fff;
    border-radius: 15px;
    text-align: center;
    line-height: 70px;
    font-size: 25px;
    letter-spacing: -0.6px;
    cursor: pointer;
    font-weight: bold;
    border: none;
  }
`;

const ServiceCall = () => {
  const animatedItem = useScrollFadeIn();
  return (
    <ServiceComponent className="call_box" {...animatedItem}>
      <p className="title">고객센터</p>
      <p className="num">1522-9008</p>
      <p className="exp">
        상담시간 평일 0900 ~ 18:00 | 점심시간 12:30 ~ 13:30{" "}
      </p>
      <button className="btn_call" onClick="#">
        전화하기
      </button>
    </ServiceComponent>
  );
};

export default ServiceCall;
