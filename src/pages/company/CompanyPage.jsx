import React from "react";
import styled from "styled-components";
// Common
import Section from "../../common/Section";
import SectionSub from "../../common/SectionSub";
import Navititle from "../../components/header/Navititle";
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";
// Contents
import CardSection from "./SolutionCardSection";
import ChallengeList from "./ChallengeList";
import CompetitionInfo from "./CompetitionInfo";
import TechCardSection from "./TechCardSection";
import AppCardSection from "./AppCardSection";
import ServiceCardSection from "./ServiceCardSection";
import Slide from "./Slide";
// background-image
import challengeimage from "../image/challenge_bg.png";
import supplyimage from "../image/tech_03_01.png";
import companyMap from "../image/company_map.png";

const CompanyPage = () => {
  const animationSupplyImg = useScrollFadeIn();
  const animationCompanyImg = useScrollFadeIn();
  const animationCompanyList = useScrollFadeIn();

  const headerTitle = "회사소개";
  const order =
      "플레이 스토어에서 APP을 바운받으세요.\n별도의 절차 없이 어디서나 차량 신청 및 관리가 가능합니다.",
    supplyText =
      "고객에게 빠르게 차량을 공급하기 위하여\n차량 신청 후 출고까지 최적화 된 시스템을 구축하였습니다.",
    serviceText =
      "권역별로 서비스망을 확보하여 이륜차 운용에 필요한\n소모품 교환과 사고발생 수리를 책임집니다.";
  return (
    <>
      <Navititle title={headerTitle} />
      <SectionComponent>
        <Section
          id="01"
          title="바이크뱅크"
          subtitle="끊임없이 진화하는 종합 이륜차 솔루션 기업"
          context="바이크뱅크는 빠르게 변화하는 퍼스널 모빌리티 환경에서"
          context_2="문제점을
          발견하여 솔루션을 제안합니다."
        ></Section>
        <CardSection />
      </SectionComponent>
      {/* <CardSection /> */}
      <SectionSubComponent>
        <SectionSub
          title="핵심 경쟁력"
          context="전문성과 업계 경험을 바탕으로"
          context_2="고객에게 종합 이륜차 솔루션을 제공합니다."
        ></SectionSub>
        <CompetitionInfo />
      </SectionSubComponent>
      <SectionChallenge>
        <SectionSub title="도전과 성과"></SectionSub>
        <ChallengeList />
      </SectionChallenge>
      {/* 02_Section */}
      <SectionComponent>
        <Section
          id="02"
          title="비즈니스를 변화시키는"
          subtitle="편리한 기술"
          context="서면으로 계약하는 불편함은 해소하고"
          context_2="휴대폰 인증으로 안전하고 편리하게 계약을 진행하세요."
        ></Section>
        <TechCardSection />
      </SectionComponent>
      <SectionOrder>
        <SectionSub title="차량 신청과 관리" context={order}></SectionSub>
        <AppCardSection />
      </SectionOrder>
      <SectionSupply>
        <SectionSub title="차량 공급시스템" context={supplyText}></SectionSub>
        <img
          src={supplyimage}
          className="supply_img"
          alt=""
          {...animationSupplyImg}
        />
      </SectionSupply>
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
      <SectionService>
        <SectionSub
          title="370개 이상의 서비스망으로 확실하게"
          context={serviceText}
        ></SectionSub>
        <img
          src={companyMap}
          className="company_map"
          {...animationCompanyImg}
        />
        <ServiceCardSection {...animationCompanyList} />
      </SectionService>
    </>
  );
};

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

const SectionChallenge = styled.div`
  width: 100%;
  padding: 137px 0 260px 0;
  background-image: url(${challengeimage});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 50% 100%;
`;

const SectionOrder = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  padding: 176px 0;
  position: relative;

  .supply_img {
    margin: 0 auto;
  }
`;

const SectionSupply = styled.div`
  width: 1194px;
  margin: 0 auto;
  padding: 103px 0 150px 0;
`;

const SectionService = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  padding: 116px 0 156px 0;

  .company_map {
    display: block;
    margin: 0 auto;
  }
`;

export default CompanyPage;
