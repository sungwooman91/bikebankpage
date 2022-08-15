import React from "react";
import styled from "styled-components";
// Common
import SectionSub from "../../common/SectionSub";
import Navititle from "../../components/header/Navititle";
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";
// Contents

// background-image
import recruitImg1 from "../image/recruit_02_01.png";
import recruitImg2 from "../image/recruit_02_02.png";
import recruitImg3 from "../image/recruit_02_03.png";
import recruitImg4 from "../image/recruit_02_04.png";
import growthImg1 from "../image/growth_01.png";
import growthImg2 from "../image/growth_02.png";
import processImg from "../image/recruit_process.png";
import blogArrowImg from "../image/blog_arrow.png";

const RecruitPage = () => {
  const animationRecruitImg = useScrollFadeIn();
  const RecruitText = useScrollFadeIn();
  const RecruitGrowth = useScrollFadeIn();
  const RecruitProcess = useScrollFadeIn();
  const RecruitBlog = useScrollFadeIn();
  const headerTitle = "채용안내";
  const recruitPage =
    "https://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=THlTNTZRY3VQWHZTL3BrMTQwODhZdz09";
  const blogPage = "https://blog.naver.com/gobikebank";

  return (
    <>
      <Navititle title={headerTitle} />
      <SectionComponent>
        <SectionSub
          title="더 나은 이륜차 시장을 만듭니다."
          context="바이크 뱅크는 배달용 이륜차 시장을 선도하는 기업으로"
          context_2="고객 만족을 위해 임직원이 함께 노력하며 성장하고 있습니다."
        ></SectionSub>
      </SectionComponent>
      <SectionRecruitPage>
        <p className="title">근무 환경과 복지</p>
        <SectionRecruitImg className="recruit_img" {...animationRecruitImg}>
          <li className="recruit_img_01">
            <img src={recruitImg1} alt="" />
          </li>
          <li className="recruit_img_02">
            <img src={recruitImg2} alt="" />
          </li>
          <li className="recruit_img_03">
            <img src={recruitImg3} alt="" />
          </li>
          <li className="recruit_img_04">
            <img src={recruitImg4} alt="" />
          </li>
        </SectionRecruitImg>
        <SectionRecruitTest className="recruit_text" {...RecruitText}>
          <li className="text_01">
            <p className="title">열심히 일한 당신. 성과를 나누자!</p>
            <p className="exp">성과연봉제, 인센티브 제도</p>
          </li>
          <li className="text_02">
            <p className="title">자기 개발을 적극적으로 응원합니다!</p>
            <p className="exp">자기 개발을 적극적으로 응원합니다!</p>
          </li>
          <li className="text_03">
            <p className="title">함께하는 시간을 가져요.</p>
            <p className="exp">분기별 직원 문화활동 지원</p>
          </li>
          <li className="text_04">
            <p className="title">연휴는 마음 편히 보내요.</p>
            <p className="exp">명절 선물/귀향비, 여름휴가비 지급</p>
          </li>
          <li className="text_05">
            <p className="title">업무에 필요한 환경을 지원해요.</p>
            <p className="exp">업무 장비, 중식비, 음료 및 간식 지원</p>
          </li>
          <li className="text_06">
            <p className="title">주차 스트레스는 이제 그만.</p>
            <p className="exp">주차장 및 주차비 지원</p>
          </li>
        </SectionRecruitTest>
      </SectionRecruitPage>
      <SectionRaseRate>
        <p className="title">바이크뱅크의 성장</p>
        <ul className="growth" {...RecruitGrowth}>
          <li className="growth_rate_01">
            <img src={growthImg1} alt="" />
          </li>
          <li className="growth_rate_02">
            <img src={growthImg2} alt="" />
          </li>
        </ul>
      </SectionRaseRate>
      <SectionRecruitProcess>
        <p className="title">입사 과정</p>
        <img src={processImg} className="process" alt="" {...RecruitProcess} />
        <hr />
        <p className="check_list">체크리스트</p>
        <p className="check_list_txt">
          - 입사 지원시 본인의 성명, 연락처, 이메일 주소 등을 정확하게
          기입하세요. <br />
          &nbsp;&nbsp;이력서에 기재된 학력 및 경력 사항이 거짓일 경우 합격이
          취소될 수 있습니다.
          <br />- 직무 특성에 따라 사전 과제, 면접, 레퍼런스 체크 등이 추가될 수
          있습니다. <br />- 종합적인 결과를 바탕으로 최종 심사를 거쳐 결과를
          합격자에게 개별 안내합니다.
        </p>
        <button
          type="button"
          className="recruit_info"
          onClick={() => window.open(recruitPage, "_blank")}
        >
          채용정보 바로가기
        </button>
      </SectionRecruitProcess>
      <SectionBlog>
        <div className="bb_blog" {...RecruitBlog}>
          <p>
            바이크뱅크의 소식이 궁금하신가요??
            <br />
            블로그를 통해 살펴보세요.
          </p>
          <button
            type="button"
            className="btn_blog"
            onClick={() => window.open(blogPage, "_blank")}
          >
            바이크뱅크 블로그 &nbsp;
            <img src={blogArrowImg} alt="" />
          </button>
        </div>
      </SectionBlog>
    </>
  );
};

const SectionComponent = styled.div`
  width: 100%;
  padding: 191px 0 107px 0;
`;

const SectionRecruitPage = styled.div`
  width: 100%;
  padding: 0 0 178px 0;
  overflow: hidden;

  .title {
    font-size: 38px;
    line-height: 52px;
    letter-spacing: -0.95px;
    width: 1194px;
    margin: 0 auto;
    font-weight: bold;
    padding-bottom: 40px;
  }
`;

const SectionRecruitImg = styled.ul`
  width: 1194px;
  margin: 0 auto;
  padding-left: 0rem;

  .recruit_img_01 {
    float: left;
    margin-right: 50px;
    margin-bottom: 50px;
  }

  .recruit_img_02 {
    margin-right: 0px;
    margin-bottom: 50px;
  }

  .recruit_img_03 {
    float: left;
    margin-right: 50px;
    margin-bottom: 50px;
  }
  .recruit_img_04 {
    margin-right: 0px;
  }
`;

const SectionRecruitTest = styled.ul`
  width: 1194px;
  margin: 0 auto;
  min-height: 480px;
  padding-left: 0rem;

  li {
    width: 572px;
    height: 130px;
    border-radius: 15px;
    box-shadow: 5px 0 30px 0 rgb(125 125 125 / 16%);
    float: left;
    margin-bottom: 30px;
    margin-right: 50px;
  }

  li:nth-child(2n) {
    margin-right: 0px;
  }

  li > .title {
    padding: 20px 0 20px 50px;
    font-size: 24px;
    line-height: 36px;
    font-weight: bold;
    letter-spacing: -0.6px;
  }

  li > .exp {
    padding-left: 50px;
    color: #5d5d5d;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.45px;
  }
`;

const SectionRaseRate = styled.div`
  width: 100%;
  padding: 140px 0 150px 0;
  background-color: #f8f8f8;

  .title {
    font-size: 38px;
    line-height: 52px;
    letter-spacing: -0.95px;
    width: 1194px;
    margin: 0 auto;
    font-weight: bold;
    padding-bottom: 40px;
  }

  ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
  }

  li {
    display: inline-block;
  }
`;

const SectionRecruitProcess = styled.div`
  width: 100%;
  padding: 0 0 180px 0;
  background-color: #f8f8f8;
  position: relative;

  .title {
    font-size: 38px;
    line-height: 52px;
    letter-spacing: -0.95px;
    width: 1194px;
    margin: 0 auto;
    font-weight: bold;
    padding-bottom: 22px;
  }

  .process {
    display: block;
    margin: 0 auto;
    padding-bottom: 60px;
  }

  hr {
    width: 1194px;
    margin: 0 auto;
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
    border: 1px solid #e1e1e1;
  }
  .check_list {
    width: 1194px;
    margin: 0 auto;
    padding: 20px 0;
    font-size: 24px;
    font-weight: bold;
    line-height: 36px;
    letter-spacing: -0.6px;
  }

  .check_list_txt {
    width: 1194px;
    margin: 0 auto;
    padding-bottom: 70px;
    font-size: 18px;
    color: #5d5d5d;
    line-height: 30px;
    letter-spacing: -0.45px;
  }
  .recruit_info {
    width: 227px;
    height: 65px;
    border-radius: 33px;
    background-color: #434343;
    color: #fff;
    line-height: 65px;
    text-align: center;
    position: absolute;
    left: 50%;
    margin-left: -597px;
    font-size: 19px;
    cursor: pointer;
  }
`;

const SectionBlog = styled.div`
  width: 100%;
  padding: 100px 0;

  .bb_blog {
    width: 1080px;
    height: 300px;
    border-radius: 15px;
    box-shadow: 5px 0 30px 0 rgb(149 149 149 / 16%);
    background-color: #ffdd6d;
    margin: 0 auto;
    position: relative;
  }
  .bb_blog > p {
    padding: 55px 0 0 40px;
    font-size: 34px;
    line-height: 50px;
    letter-spacing: -0.85px;
    color: #222;
    font-weight: bold;
  }

  .bb_blog > .btn_blog {
    position: absolute;
    left: 40px;
    bottom: 30px;
    width: 268px;
    height: 50px;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: -0.55px;

    border: none;
  }
`;
export default RecruitPage;
