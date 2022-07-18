import React from "react";
// import { Route } from "react-router-dom";

import styled from "styled-components";

import Side from "./sidebar/Side";
import Middle from "./Middle";
//import { Link } from "react-scroll";
// import Company from "./contents/company/Company";

const ContentDiv = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
`;

function Mainpage() {
  return (
    <ContentDiv>
      <Middle />
      <Side />
    </ContentDiv>
  );
}

export default Mainpage;
