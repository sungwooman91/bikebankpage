import React from "react";
import styled from "styled-components";
// Common
import Section from "../../common/Section";
import Navititle from "../../components/header/Navititle";
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";
import SubHeaderBar from "../../common/SubHeaderBar.js";
// Contents
import RentGuaranteeRCS from "./RentGuaranteeRCS";
import RentApplySection from "./RentApplySection";
import RentProductTap from "./RentProductTap";
import RentServiceInfo from "./RentServiceInfo";
// image
import rentApp from "../image/rent_01.png";
// test
import SubHeaderBarTest from "../../common/SubHeaderBarTest.js";

const RentPage = () => {
  // Animation
  const animationAppImg = useScrollFadeIn();
  // naming
  const pageName = "렌트소개";
  const ContextRCS =
    "바이크뱅크는 RCS를 통해 일 평균 30건의\n크고 작은 배달이륜차 사고를 관리하고 있습니다.";

  return (
    <>
      <Navititle title={pageName} />
      {/* <SubHeaderBar /> */}
      <SubHeaderBarTest />
      <SectionComponent>
        <Section
          id="01"
          title="렌트 이용안내"
          subtitle="계약부터 신청까지 간편하게 이용하세요."
          context="*배달업 사업자전용"
        />
        <div className="rent_app">
          <img className="rent_img" src={rentApp} alt="" {...animationAppImg} />
        </div>
        <RentApplySection />
      </SectionComponent>
      <SectionComponent>
        <Section
          id="02"
          title="상품 안내"
          subtitle="옵션에 대해 알려드립니다."
          context="*상품 종류 및 보험 연령에 따라 요금이 변경됩니다."
        ></Section>
        <RentProductTap />
      </SectionComponent>
      <SectionComponent>
        <Section
          id="03"
          title="사고 보장 안내"
          subtitle="바이크뱅크의 RCS (Rider Care System)"
          context={ContextRCS}
        ></Section>
        <RentGuaranteeRCS />
      </SectionComponent>
      <SectionComponent>
        <Section id="04" subtitle="렌트차 서비스 안내"></Section>
        <RentServiceInfo />
      </SectionComponent>
    </>
  );
};

const SectionComponent = styled.div`
  width: 1194px;
  margin: 0 auto;
  padding: 99px 0 150px 0;

  .rent_app {
    width: 100%;
    height: 260px;
    border-radius: 15px;
    box-shadow: 5px 0 30px 0 rgb(125 125 125 / 16%);
    text-align: center;
  }
  .rent_img {
    padding-top: 38px;
  }
`;

export default RentPage;
