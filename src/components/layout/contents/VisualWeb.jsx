import React from "react";
import styled from "styled-components";

// eslint-disable-next-line
const VisualDiv = styled.div`
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

const VisualWeb = () => {
  return (
    <VisualDiv>
      <div>
        <p className="context">
          No.1
          <br />
          비즈니스 이륜차 솔루션
          <br />
        </p>
        <p>
          <span>바이크뱅크</span>
        </p>
        <button type="button" onclick="location.href='rent.html'">
          렌트상품 알아보기
        </button>
      </div>
    </VisualDiv>
  );
};

export default VisualWeb;
