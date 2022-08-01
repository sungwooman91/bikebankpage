import React from "react";
import styled from "styled-components";

import BackGroundB from "../image/background_blue.jpg";
import BackGroundG from "../image/background_gray.jpg";

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

  button {
    width: 240px;
    height: 65px;
    border-radius: 33px;
    background-color: #ffce30;
    text-align: center;
    line-height: 65px;
    margin: 0 auto;
    display: block;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    /* background: none; */
    border: none;
  }
  .hr_guar {
    width: 1080px;
    margin: 61px auto;
    border: 1px solid #999;
  }
`;

const RCSlist = styled.ul`
  opacity: 1;
  transform: translate(0px, 0px);
  width: 100%;
  padding-top: 32px;
  text-align: center;
  list-style: none;
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;

  li {
    width: 515px;
    height: 374px;
    display: inline-block;
    box-shadow: 5px 0 30px 0 rgb(125 125 125 / 16%);
    border-radius: 20px;
  }

  li > .title {
    padding: 34px 0;
    color: #fff;
    font-size: 26px;
    font-weight: 500;
    letter-spacing: -0.65px;
    line-height: 42px;
  }
  li > .price {
    padding-top: 30px;
    font-size: 40px;
    line-height: 52px;
    font-weight: 500;
    letter-spacing: -1 0.1px;
  }

  li > .text {
    padding-bottom: 30px;
    width: 400px;
    margin: 0 auto;
    border-bottom: 1px solid #5d5d5d;
    font-size: 30px;
    line-height: 52px;
    letter-spacing: -0.75px;
  }
  li > .link {
    padding-top: 20px;
    font-size: 20px;
    line-height: 38px;
    font-weight: 500;
    cursor: pointer;
  }

  li:first-child {
    margin-right: 50px;
    background-image: url(${BackGroundB});
    background-size: 100% 107px;
    background-repeat: no-repeat;
    background-position: 0 0;
  }

  li:first-child > .price {
    color: #0c76d2;
  }

  li:first-child > .text {
    color: #0c76d2;
  }

  li:last-child {
    background-image: url(${BackGroundG});
    background-size: 100% 107px;
    background-repeat: no-repeat;
    background-position: 0 0;
  }
`;

const GuaranteeContext = () => {
  return (
    <GuaranteeDiv>
      <div className="guarantee_wrap">
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
        <li>
          <p className="title">대물보장</p>
          <p className="exp">2억원</p>
        </li>
        <li>
          <p className="title">라이더 추가보장</p>
          <p className="exp">상해보험</p>
        </li>
      </ul>
      <button type="button">보험보장 상세내용</button>
      <hr className="hr_guar" />
      <RCSlist>
        <li class="bikebank">
          <p class="title">바이크뱅크 RCS 이용시</p>
          <p class="price">7,400만원</p>
          <p class="text">보상 받은 사연</p>
          <p class="link" onClick="#">
            횡단보도 보행자 충돌 사고
          </p>
        </li>
        <li class="default">
          <p class="title">책임보험만 가입시</p>
          <p class="price">3,100만원</p>
          <p class="text">부담 한 사연</p>
          <p class="link" onClick="#">
            무단횡단 피해자와 충돌 사고
          </p>
        </li>
      </RCSlist>
    </GuaranteeDiv>
  );
};

export default GuaranteeContext;
