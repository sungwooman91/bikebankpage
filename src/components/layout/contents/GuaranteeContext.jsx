import React from "react";
import styled from "styled-components";

const GuaranteeDiv = styled.div`
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
const GuaranteeContext = () => {
  return (
    <GuaranteeDiv>
      <p class="exp">
        배달용 오토바이 필요할 때<br />
        비용 부담을 줄이도록
      </p>
      <p class="exp_02">
        오토바이 구입비에 보험 가입비까지
        <br />
        갑작스러운 비용 증가가 부담된다면 바이크뱅크 렌트 상품
      </p>
      <p class="num">03</p>
    </GuaranteeDiv>
  );
};

export default GuaranteeContext;
