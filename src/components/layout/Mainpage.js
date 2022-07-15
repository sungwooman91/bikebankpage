import React from "react";
import styled from "styled-components";

import Side from "./sidebar/Side";
import Middle from "./Middle";

const ContentDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;

  // 영역 확인
  /* background-color: #74992e; */
`;

const Mainpage = () => {
  return (
    <ContentDiv>
      <Middle />
      <Side />
    </ContentDiv>
  );
};

export default Mainpage;
