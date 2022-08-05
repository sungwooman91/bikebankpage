import React, { useState } from "react";
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";
// style & bootstrap
import styled from "styled-components";

// data
// fadein
// image
import rcsImg01 from "../image/rcs_img_01.png";

const RentGuaranteeRCS = () => {
  const animationTapImg = useScrollFadeIn();
  return (
    <RcsList className="rcs_list" {...animationTapImg}>
      <RcsListDetail1st className="rcs_01">
        <p className="title">횡단보도 보행자 충돌 사고</p>
        <p className="text">
          경상남도 양산시 서창동 2차선 도로에서 라이더가
          <br />
          횡단보도를 보행하던 피해자와 충돌한 사고
          <br />
          자차 과실 100% / 피해자 상해등급 1급 / 후유장애 5급
        </p>
        <p className="exp">2020년 05월 19일</p>
      </RcsListDetail1st>
      <RcsListDetail2nd className="rcs_02">
        <p className="title">일반 책임보험 차량 이용시</p>
        <p className="text">
          라이더 부담 금액
          <br />총 74,144,696원
        </p>
        <p className="exp">&lt;벌금 라이더 부담&gt;</p>
      </RcsListDetail2nd>
      <RcsListDetail3rd className="rcs_03">
        <p className="title">바이크뱅크 RCS 차량 이용시</p>
        <p className="text">
          양산시 김OO 지점장 부담 금액
          <br />0 원
        </p>
        <p className="exp">&lt;벌금 납부 후 지급&gt;</p>
      </RcsListDetail3rd>
    </RcsList>
  );
};

const RcsList = styled.div`
  width: 1194px;
  margin: 0 auto;
  min-height: 550px;
`;
const RcsListDetail1st = styled.div`
  width: 572px;
  height: 600px;
  border-radius: 15px;
  box-shadow: 5px 0 30px 0 rgb(149 149 149 / 16%);
  float: left;
  margin-right: 50px;
  background-image: url(${rcsImg01});
  background-repeat: no-repeat;

  .title {
    padding: 329px 0 0 57px;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: -0.6px;
  }
  .text {
    padding: 22px 0 0 57px;
    font-size: 18px;
    letter-spacing: -0.45px;
    color: #5d5d5d;
    line-height: 28px;
  }
  .exp {
    padding: 20px 0 0 57px;
    font-size: 18px;
    letter-spacing: -0.45px;
    color: #5d5d5d;
  }
`;
const RcsListDetail2nd = styled.div`
  width: 572px;
  height: 280px;
  border-radius: 15px;
  box-shadow: 5px 0 30px 0 rgb(149 149 149 / 16%);
  float: right;

  .title {
    padding: 40px 0 0 47px;
    font-size: 20px;
    color: #5d5d5d;
    letter-spacing: -0.5px;
  }
  .text {
    padding: 10px 0 0 47px;
    font-size: 24px;
    font-weight: bold;
    line-height: 40px;
    letter-spacing: -0.6px;
  }
  .exp {
    padding: 20px 0 0 47px;
    font-size: 18px;
    letter-spacing: -0.45px;
    color: #5d5d5d;
  }
`;
const RcsListDetail3rd = styled.div`
  width: 572px;
  height: 270px;
  border-radius: 15px;
  box-shadow: 5px 0 30px 0 rgb(149 149 149 / 16%);
  float: right;
  margin-top: 50px;

  .title {
    padding: 40px 0 0 47px;
    font-size: 20px;
    color: #ffc400;
    letter-spacing: -0.5px;
  }
  .text {
    padding: 10px 0 0 47px;
    font-size: 24px;
    font-weight: bold;
    line-height: 40px;
    letter-spacing: -0.6px;
    color: #ffc400;
  }
  .exp {
    padding: 20px 0 0 47px;
    font-size: 18px;
    letter-spacing: -0.45px;
    color: #5d5d5d;
  }
`;
export default RentGuaranteeRCS;
