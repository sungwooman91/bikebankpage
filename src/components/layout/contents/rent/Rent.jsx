import React from "react";
import styled from "styled-components";
import Section from "../../../common/Section";
// import styled from "styled-components";
// import backimager from "../image/main_rent.png";
import Slide from "../company/Slide";

const RentWrap = styled.div`
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

const Rent = () => {
  return (
    <RentWrap>
      <SectionComponent>
        <Section
          id="01"
          title="렌트 이용안내"
          subtitle="계약부터 신청까지 간편하게 이용하세요."
          context="*배달업 사업자전용"
        ></Section>
      </SectionComponent>
      <SectionComponent>
        <Section
          id="02"
          title="상품 안내"
          subtitle="옵션에 대해 알려드립니다."
          context="*상품 종류 및 보험 연령에 따라 요금이 변경됩니다."
        ></Section>
      </SectionComponent>
      <Slide />
      <SectionComponent>
        <Section
          id="03"
          title="사고 보장 안내"
          subtitle="바이크뱅크의 RCS (Rider Care System)"
          context="바이크뱅크는 RCS를 통해 일 평균 30건의 \n크고 작은 배달이륜차 사고를 관리하고 있습니다."
        ></Section>
      </SectionComponent>
      <SectionComponent>
        <Section id="04" subtitle="렌트차 서비스 안내"></Section>
      </SectionComponent>
    </RentWrap>
  );
};

export default Rent;
