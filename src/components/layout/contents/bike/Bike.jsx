import React from "react";
import styled from "styled-components";
import Section from "../../../common/Section";
// import Slide from "./Slide";

const BikeWrap = styled.div`
  width: 80%;
  /* display: flex; */
  justify-content: center;
  /* position: relative; */
`;

const SectionComponent = styled.div`
  width: 1194px;
  margin: 0 auto;
  padding: 70px 0 143px 0;
`;

const Company = () => {
  return (
    <CompanyWrap>
      <SectionComponent>
        <Section
          id="01"
          title="바이크뱅크"
          subtitle="끊임없이 진화하는 종합 이륜차 솔루션 기업"
          context="바이크뱅크는 빠르게 변화하는 퍼스널 모빌리티 환경에서 문제점을
          발견하여 솔루션을 제안합니다."
        ></Section>
      </SectionComponent>
      <SectionComponent>
        <Section
          id="02"
          title="비즈니스를 변화시키는"
          subtitle="편리한 기술"
          context="서면으로 계약하는 불편함은 해소하고 휴대폰 인증으로 안전하고 편리하게 계약을 진행하세요."
        ></Section>
      </SectionComponent>
      <Slide />
      <Section
        id="03"
        title="출고부터 수거까지"
        subtitle="준비된 이륜차 인프라"
        context="생활 속 편안한 주행 경험을 위해 차량 이용의 모든 과정에서 바이크뱅크의 관리를 받을 수 있습니다."
      ></Section>
      <Slide />
    </CompanyWrap>
  );
};

export default Company;
