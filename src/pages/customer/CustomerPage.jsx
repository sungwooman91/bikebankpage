import React from "react";
import styled from "styled-components";
// Common
import Section from "../../common/Section.jsx";
import Navititle from "../../components/header/Navititle.js";
// api
import GetStoreData from "../../api/GetStoreData.jsx";
// item
import BbServiceMap from "./BbServiceMap.jsx";
import ServiceCall from "./ServiceCall.jsx";
import ServiceQna from "./ServiceQna.jsx";

const CustomerPage = () => {
  const pageName = "고객지원";
  return (
    <>
      <Navititle title={pageName} />
      <SectionComponent>
        <GetStoreData />
        <Section
          id="01"
          // title="바이크뱅크"
          subtitle="서비스 문의하기"
          context="고객센터에서는 바이크뱅크와 관련된 문의를 할 수 있습니다."
        ></Section>
        <ServiceCall />
      </SectionComponent>
      <ServiceComponent>
        <Section
          id="02"
          subtitle="서비스 네트워크"
          context="바이크뱅크의 전국 판매/서비스점을 확인하세요."
          context_2="가까운 판매/서비스점에서 차량수리, 점검, 부품구입을 할 수 있습니다."
        ></Section>
        <BbServiceMap />
      </ServiceComponent>
      <QnaComponet>
        <Section id="03" subtitle="자주 묻는 질문"></Section>
        <ServiceQna />
      </QnaComponet>
    </>
  );
};

export const SectionComponent = styled.div`
  width: 100%;
  padding: 99px 0 275px 0;
`;

export const ServiceComponent = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  padding: 99px 0 105px 0;
`;

export const QnaComponet = styled.div`
  width: 100%;
  padding: 99px 0 275px 0;
`;

export default CustomerPage;
