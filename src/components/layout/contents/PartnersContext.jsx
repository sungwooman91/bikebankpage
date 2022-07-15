import React from "react";
import styled from "styled-components";

import partnerimg from "./parners_img.png";

const PartnerDiv = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;

  div {
    height: 500px;
  }

  .article_title {
    color: #ffce30;
  }

  .text {
    color: #000;
  }

  .text_02 {
    color: gray;
    font-size: 20px;
  }
`;

const Partertitle = styled.p`
  color: #000;
  font-size: 30px;
  span {
    font-weight: bold;
  }
`;

const Partners = () => {
  return (
    <PartnerDiv>
      <h2 className="article_title">PARTNERS</h2>
      <Partertitle>
        바이크뱅크는 다양한 비즈니스 파트너들에게
        <br />
        <span>이륜차 솔루션을 제공합니다</span>
      </Partertitle>
      <p className="text_02">* 2022년 2월 기준</p>
      <img src={partnerimg} alt="partners_img"></img>
    </PartnerDiv>
  );
};

export default Partners;
