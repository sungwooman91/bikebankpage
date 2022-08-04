import React from "react";
import styled from "styled-components";
import Section from "../../common/Section";
import Navititle from "../../components/header/Navititle";
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

const Bike = () => {
  const pageName = "차량판매";
  return (
    <>
      <Navititle title={pageName} />
      <SectionComponent>
        <Section
          id="01"
          title="판매용 완성차 라인업"
          subtitle="바이크뱅크의 판매 전용 차량을 선보입니다."
        ></Section>
      </SectionComponent>
      <SectionComponent>
        <Section
          id="02"
          title="보증 정책"
          subtitle="안전하고 만족스러운 서비스를 제공하겠습니다."
          context="구입하신 차량을 구성하는 각 부품의 제조상 불량이 발생한 경우"
          context_2="보증서에 표시된 기간과 조건에 따라 무상수리 서비스를 제공합니다."
        ></Section>
      </SectionComponent>

      <Section
        id="03"
        subtitle="차량 서비스 안내"
        context="고객님께 만족스러운 서비스를 제공하겠습니다."
      ></Section>
    </>
  );
};

export default Bike;
