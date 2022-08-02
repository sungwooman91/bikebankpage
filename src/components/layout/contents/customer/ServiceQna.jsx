import React from "react";
import styled from "styled-components";

import { useScrollFadeIn } from "../../../hook/useScrollFadeIn";

export const ServiceComponent = styled.ul`
  width: 1194px;
  margin: 0 auto;
  border-top: 1px solid #999;
  list-style: none;

  li > .title {
    padding: 20px 0px;
    text-indent: 56px;
    border-bottom: 1px solid #999;
    font-size: 18px;
    color: #5d5d5d;
    letter-spacing: -0.5px;
    background-image: url(../images/btn_down.png);
    background-repeat: no-repeat;
    background-position: 98% 50%;
    cursor: pointer;
  }

  li > .contents {
    padding: 38px 56px;
    background-color: #f8f8f8;
    font-size: 18px;
    color: #5d5d5d;
    line-height: 35px;
    letter-spacing: -0.5px;
    border-bottom: 1px solid #999;
    display: none;
  }
`;

const ServiceQna = () => {
  const animatedItem = useScrollFadeIn();
  return (
    <ServiceComponent className="qna_box" {...animatedItem}>
      <li>
        <p class="title">바이크뱅크 렌트 상품은 책임보험인가요?</p>
        <p class="contents">
          바이크뱅크 렌트상품의 보장은 유상운송책임보험 + RCS*(Ride Care
          System)입니다.
          <br />
          '대인무한', '대물2억원'으로 업계 최고 담보금액을 보장하고
          있습니다.(단, 공소권있음)
          <br />* RCS(Ride Care System)란? 고가의 종합보험이 부담되어 책임보험만
          가입하여 운행하는 라이더를 위해, 바이크뱅크가 사고보장을 보증하는
          라이더 지원 시스템입니다.
        </p>
      </li>
      <li>
        <p class="title">
          프리랜서로 배달대행을 하는 기사입니다. 바이크뱅크 렌트상품을 이용하고
          싶습니다.
        </p>
        <p class="contents">
          바이크뱅크의 렌트상품은 배달업 사업자 전용 상품입니다.
          <br />
          계약이 체결된 배달대행사의 지점(지사, 대리점, 허브, 총판 등)에서
          이용이 가능하며,
          <br />
          개인 또는 공급계약체결이 어려운 배달대행사에서 바이크뱅크 렌트상품을
          이용하시고자 하는 경우에는
          <br />
          가까운 바이크뱅크 대리점으로 이용문의 바랍니다.
          <br />* 가까운 대리점 찾기보기 -> 홈페이지 내 유통망현황이 있을 경우
          해당페이지로 이동 링크
        </p>
      </li>
      <li>
        <p class="title">
          기사가 퇴사하여 운행하지 않는 바이크뱅크 렌트 차량을 계약 만기전에
          반납할 수 있나요?
        </p>
        <p class="contents">
          *휴차 발생시 - 이관 안내
          <br />
          기사의 퇴사 등으로 휴차가 발생한 경우, 동일 배달대행사 내에서 휴차의
          이관이 가능합니다.
          <br />
          차량공유서비스 APP의 휴차정보공유 메뉴를 이용하여 휴차정보를 공유할 수
          있습니다.
          <br />
          이관할 곳과 받을 곳 양측의 이관협의가 된 경우
          <br />
          양측대표자가 자필서명을 포함하여 작성한 이관신청서를 평일 17시까지
          담당부서로 이관신청서접수* 하면,
          <br />
          이관불가사유(미정산, 미계약 등)가 없을 경우 익일부터 이관적용되며,
          렌트료는 이관된 지점에 과금됩니다.
          <br />
          <br />
          *휴차 발생시 - 이관 불가시
          <br />
          - 반납형 렌트상품의 잔여기간이 6개월 미만일 경우 중도반납을 신청할 수
          있으나,
          <br />
          만기전 중도계약해지로 인한 위약금(잔여렌트료의 20%)납부가 필요하며,
          보증금은 반환되지 않습니다.
          <br />
          그리고, 반납차량의 정비금액은 별도 청구되어집니다.
          <br />
          - 인수형 렌트상품은 반납이 불가하며, 잔여기간이 6개월미만일 경우
          중도인수를 신청할 수 있습니다.
          <br />
          중도인수 시에는 중도인수대금(잔여렌트료 전액 + 차량별인수금 -
          보증금)의 납부가 필요합니다.
        </p>
      </li>
      <li>
        <p class="title">
          기사가 바뀌는 경우 그 연령에 맞게 보험연령을 변경할 수 있나요?
        </p>
        <p class="contents">
          네. 보험연령변경 가능합니다. (단, 전연령, 19세 상품은 변경
          불가합니다.)
          <br />
          보험연령변경요청서를 작성하여 평일 16시 30분까지 담당부서로
          요청서접수* 와 보험연령변경 수수료(건당 10만원)를 납부해주세요.
          <br />
          익일부터 변경된 연령으로 보험적용되어지며, 렌트료 또한 변경시점의
          렌트료로 변경됩니다.
          <br />
          * 요청서접수 : 카카오톡으로 접수(카카오톡 접수 ID : bikebank02)
          <br />* 연령변경요청서 양식은 다운로드 페이지에서 내려받으실 수
          있습니다.
        </p>
      </li>
      <li>
        <p class="title">
          이용중인 렌트차량의 머플러나 램프를 변경하고 싶은데, 렌트기간 내에도
          구조변경이 가능한가요?
        </p>
        <p class="contents">
          렌트차량은 렌트기간 중 구조변경시 차량 보증수리의 문제발생 등으로 인해
          구조변경을 허용하고 있지 않습니다.
          <br />
          임의로 구조변경한 경우 원상복구명령과 과태료가 부과되니 주의하시기
          바랍니다.
        </p>
      </li>
      <li>
        <p class="title">
          바이크뱅크에서 내가 원하는 기간만큼만 오토바이를 빌려탈 수 있나요?
        </p>
        <p class="contents">
          저희 바이크뱅크의 렌트상품은 배달대행에 최적화하여 유상운송보험을
          탑재한 상품으로 1년형 상품으로 제공되고 있습니다.
          <br />
          아쉽게도 현재 레져용과 같은 단기간 이용할 수 있는 개인형 상품은
          마련되어져 있지 않습니다.
          <br />
          고객님들의 다양한 요구와 수요를 고려한 상품개발을 위해 노력하겠습니다.
        </p>
      </li>
      <li>
        <p class="title">
          배달도중 사고가 발생했습니다. 가까운 오토바이 수리센터에 입고하여
          사고수리하면 되나요?
        </p>
        <p class="contents">
          바이크뱅크 차량은 출고시 관리정비점이 지정되어집니다.
          <br />
          지정된 관리정비점을 통해 사고수리가 가능합니다.
        </p>
      </li>
      <li>
        <p class="title">
          차량 운행중에 사고가 발생했습니다. 어떻게 하면 되나요?
        </p>
        <p class="contents">
          즉시 안전을 확보한 후 소속 사무실에 사고 사실을 알려주세요.
          바이크뱅크의 RCS정책에 따라 접수를 진행해 드립니다.
        </p>
      </li>
    </ServiceComponent>
  );
};

export default ServiceQna;
