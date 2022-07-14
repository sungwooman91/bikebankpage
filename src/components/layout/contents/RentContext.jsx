import React from "react";
import styled from "styled-components";

// eslint-disable-next-line
const rentDiv = styled.div`
  div {
    height: 10%;
  }
`;

const RentPage = () => {
  return (
    <rentDiv>
      <h2>RENT</h2>
      <p className="text">
        국내 이륜차 렌트 점유율 1위 업체로서
        <br />
        <span>최고 수준의 배달용 렌트 상품을 공급합니다</span>
      </p>
      <p className="text_02">
        전국 8,000여대의 렌트 이륜차를 운용하며 출고부터 관리, 사고 보장까지 한
        번에
        <br />
        어려운 오토바이 관리를 바이크뱅크에서 편하게 이용하세요.
      </p>
      {/* <img src="/main_rent.png" className="main_rent_img" /> */}
      <ul class="rent_count">
        <li>
          <p class="c_title">운영도시</p>
          <p class="c_num">70 +</p>
        </li>
        <li>
          <p class="c_title">사용점</p>
          <p class="c_num">1700 +</p>
        </li>
        <li>
          <p class="c_title">렌트수</p>
          <p class="c_num">8000 +</p>
        </li>
      </ul>
    </rentDiv>
  );
};

export default RentPage;
