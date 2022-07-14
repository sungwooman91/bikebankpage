import React from "react";
import styled from "styled-components";

const CheckpointeDiv = styled.div`
  div {
    /* height: 100px; */
    /* background-color: black; */
  }
  div p {
    font-size: 20px;
  }

  div .context {
    font-size: 40px;
  }
`;
const CheckpointContext = () => {
  return (
    <CheckpointeDiv>
      <div class="title">
        <h2>CHECK POINT</h2>
        <p class="text">
          배달용 렌트의 기준
          <br />세 가지를 꼭 체크하세요
        </p>
      </div>
      <ul class="check_list">
        <li class="check_up">
          <p class="num">01.</p>
          <p class="title">보험보장</p>
          <p class="text">합리적인 가격과 폭 넓은 보장 범위</p>
        </li>
        <li class="check_up">
          <p class="num">02.</p>
          <p class="title">관리편의성</p>
          <p class="text">이륜차에 특화된 관리 서비스</p>
        </li>
        <li class="check_up">
          <p class="num">03.</p>
          <p class="title">렌트비용</p>
          <p class="text">낮은 비용으로 사업 부담 감소</p>
        </li>
      </ul>
    </CheckpointeDiv>
  );
};

export default CheckpointContext;
