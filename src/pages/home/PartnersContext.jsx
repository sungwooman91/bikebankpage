import React from "react";
import styled from "styled-components";

import background from "../image/background_yellow.jpg";
import partnerimg from "../image/parners_img.png";
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";

const PartnerDiv = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  display: block;
  .main_partners {
    width: 1080px;
    margin: 0 auto;
    padding: 130px 0 0 0;
  }

  .main_partners .title {
    background-image: url(${background});
    background-size: 345px 3px;
    background-position: 100% 56px;
    background-repeat: no-repeat;
  }

  .main_partners .title h2 {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.6px;
    color: #ffc400;
  }

  .text {
    margin-top: 20px;
    font-size: 38px;
    line-height: 1.37;
    color: #000;
    letter-spacing: -1.9px;
  }
  .main_partners .title .text > span {
    font-weight: bold;
  }

  .text_02 {
    font-size: 20px;
    line-height: 32px;
    letter-spacing: -0.5px;
    color: #5d5d5d;
    padding-top: 21px;
  }
  .partners_img {
    display: block;
    margin: 0 auto;
    padding: 50px 0 130px 0;
  }
`;

const Partners = () => {
  const animatedItem = useScrollFadeIn();
  return (
    <PartnerDiv className="main_partners_wrap">
      <div className="main_partners">
        <div className="title">
          <h2>PARTNERS</h2>
          <p className="text">
            바이크뱅크는 다양한 비즈니스 파트너들에게
            <br />
            <span>이륜차 솔루션을 제공합니다</span>
          </p>
          <p className="text_02">* 2022년 2월 기준</p>
        </div>
      </div>
      <img
        src={partnerimg}
        className="partners_img"
        alt="partners_img"
        {...animatedItem}
      ></img>
    </PartnerDiv>
  );
};

export default Partners;
