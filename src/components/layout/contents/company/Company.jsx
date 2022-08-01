import React from "react";
import styled from "styled-components";
import Section from "../../../common/Section";
import SectionSub from "../../../common/SectionSub";

// import styled from "styled-components";
// import backimager from "../image/main_rent.png";
import Slide from "./Slide";
// import { Card } from "react-bootstrap";

const SectionComponent = styled.div`
  width: 1194px;
  margin: 0 auto;
  padding: 70px 0 143px 0;
`;

const SectionSubComponent = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  padding: 90px 0 145px 0;
`;

const Section3rdComponent = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  padding: 90px 0 145px 0;
`;

const Company = () => {
  return (
    <>
      {/* <GetStoreData /> */}
      {/* 01_Section */}
      <SectionComponent>
        <Section
          id="01"
          title="바이크뱅크"
          subtitle="끊임없이 진화하는 종합 이륜차 솔루션 기업"
          context="바이크뱅크는 빠르게 변화하는 퍼스널 모빌리티 환경에서\n문제점을
          발견하여 솔루션을 제안합니다."
        ></Section>
      </SectionComponent>
      {/* <CardSection /> */}
      <SectionSubComponent>
        <SectionSub
          title="핵심 경쟁력"
          context="전문성과 업계 경험을 바탕으로 고객에게 종합 이륜차 솔루션을 제공합니다."
        ></SectionSub>
      </SectionSubComponent>
      <Section3rdComponent></Section3rdComponent>
      {/* 02_Section */}
      <SectionComponent>
        <Section
          id="02"
          title="비즈니스를 변화시키는"
          subtitle="편리한 기술"
          context="서면으로 계약하는 불편함은 해소하고 휴대폰 인증으로 안전하고 편리하게 계약을 진행하세요."
        ></Section>
      </SectionComponent>
      <SectionSubComponent>
        <SectionSub
          title="차량 신청과 관리"
          context="플레이 스토어에서 APP을 바운받으세요. 별도의 절차 없이 어디서나 차량 신청 및 관리가 가능합니다."
        ></SectionSub>
      </SectionSubComponent>
      <Section3rdComponent></Section3rdComponent>
      {/* 03_Section */}
      <SectionComponent>
        <Section
          id="03"
          title="출고부터 수거까지"
          subtitle="준비된 이륜차 인프라"
          context="생활 속 편안한 주행 경험을 위해 차량 이용의 모든 과정에서 바이크뱅크의 관리를 받을 수 있습니다."
        ></Section>
        <Slide />
      </SectionComponent>
      <SectionSubComponent>
        <SectionSub
          title="370개 이상의 서비스망으로 확실하게"
          context="권역별로 서비스망을 확보하여 이륜차 운용에 필요한 소모품 교환과 사고발생 수리를 책임집니다."
        ></SectionSub>
      </SectionSubComponent>
      <Section3rdComponent></Section3rdComponent>
      {/* <GuaranteeContext2 /> */}
    </>
  );
};

export default Company;
