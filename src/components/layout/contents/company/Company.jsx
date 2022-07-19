import React from "react";
import styled from "styled-components";
// import styled from "styled-components";
// import backimager from "../image/main_rent.png";
import Slide from "./Slide";

const CompanyWrap = styled.div`
  width: 80%;
  /* display: flex; */
  justify-content: center;
`;
const Company = () => {
  return (
    <CompanyWrap>
      <Slide />
      <Slide />
    </CompanyWrap>
  );
};

export default Company;
