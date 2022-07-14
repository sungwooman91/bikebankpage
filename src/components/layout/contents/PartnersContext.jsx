import React from "react";
import styled from "styled-components";

const PartnerDiv = styled.div`
  div {
    height: 500px;
  }

  .text {
    color: #00f;
  }

  .text_02 {
    color: gray;
  }
`;

const Partertitle = styled.p`
  color: #eea61f;
`;
const Partners = () => {
  return (
    <PartnerDiv>
      <h2 className="parter_title">PARTNERS</h2>
      <p className="text">
        안녕하세요
        <Partertitle>
          바이크뱅크는 다양한 비즈니스 파트너들에게
          <br />
          <span>이륜차 솔루션을 제공합니다</span>
        </Partertitle>
      </p>
      <p className="text_02">* 2022년 2월 기준</p>
    </PartnerDiv>
  );
};

export default Partners;
