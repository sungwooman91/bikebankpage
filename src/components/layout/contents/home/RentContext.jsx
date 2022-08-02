import React from "react";
import styled from "styled-components";
import backimager from "../image/main_rent.png";
import background from "../image/background_yellow.jpg";

import useCountNum from "../../../hook/useCountNum";
import { useScrollFadeIn } from "../../../hook/useScrollFadeIn";

const RentDiv = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding: 140px 0 140px 0;

  .title {
    background-image: url(${background});
    background-size: 345px 3px;
    background-position: 100% 56px;
    background-repeat: no-repeat;
  }

  .title {
    color: #ffce30;
  }

  .text {
    margin-top: 20px;
    font-size: 38px;
    line-height: 1.37;
    color: #000;
    letter-spacing: -1.9px;
  }

  .text > span {
    font-weight: bold;
  }

  .text_02 {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.5px;
    color: #5d5d5d;
    padding-top: 21px;
  }
  .main_rent_img {
    padding: 51px 0 20px 0;
  }
  .rent_count {
    overflow: hidden;
    display: flex;
  }
  .rent_count ul {
    list-style: none;
  }

  .rent_count li {
    float: left;
    width: 33.3%;
    font-weight: bold;
  }
  .rent_count li > .c_title {
    font-size: 24px;
    letter-spacing: -0.6px;
    font-weight: 500;
    color: #ffc400;
    line-height: 36px;
  }
  .rent_count li > .c_num {
    padding-top: 10px;
    font-size: 70px;
    letter-spacing: -1.75px;
    color: #000;
    font-family: "sf" !important;
  }
`;

const RentPage = () => {
  const getCityNum = useCountNum(70);
  const getStoreNum = useCountNum(1700, 0, 2700);
  const getRentNum = useCountNum(8000, 0, 3500);
  const animatedItem = useScrollFadeIn();

  return (
    <RentDiv className="main_rent">
      <div className="title">
        <h2>RENT</h2>
        <p className="text">
          국내 이륜차 렌트 점유율 1위 업체로서
          <br />
          <span>최고 수준의 배달용 렌트 상품을 공급합니다</span>
        </p>
        <p className="text_02">
          전국 8,000여대의 렌트 이륜차를 운용하며 출고부터 관리, 사고 보장까지
          한 번에
          <br />
          어려운 오토바이 관리를 바이크뱅크에서 편하게 이용하세요.
        </p>
      </div>
      <img
        src={backimager}
        className="main_rent_img"
        alt="imgtitle"
        // {...animatedItem}
      />
      <ul className="rent_count" {...animatedItem}>
        <li>
          <p className="c_title">운영도시</p>
          <p className="c_num">{getCityNum} +</p>
        </li>
        <li>
          <p className="c_title">사용점</p>
          <p className="c_num">{getStoreNum} +</p>
        </li>
        <li>
          <p className="c_title">렌트수</p>
          <p className="c_num">{getRentNum} +</p>
        </li>
      </ul>
    </RentDiv>
  );
};

export default RentPage;
