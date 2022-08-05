import React from "react";
import styled from "styled-components";

// import Side from "./sidebar/Side";
import VisualWeb from "./home/VisualWeb";
import MainSolution from "./home/MainSolutionContext";
import RentPage from "./home/RentContext";
import Partners from "./home/PartnersContext";
import CheckpointContext from "./home/CheckpointContext";
import GuaranteeContext from "./home/GuaranteeContext";
import GuaranteeContextArea from "./home/GuaranteeContextArea";
import GuaranteeContextPrice from "./home/GuaranteeContextPrice";

const ContentDiv = styled.div`
  /* width: 100%; */
  display: block;
  margin: 3rem 3rem;
  justify-content: center;
`;

function Mainpage() {
  return (
    <>
      <VisualWeb />
      <ContentDiv className="homeContent_wrap">
        <MainSolution />
        <RentPage />
        <Partners />
        <CheckpointContext />
        <GuaranteeContext />
        <GuaranteeContextArea />
        <GuaranteeContextPrice />
        {/* <Side /> */}
      </ContentDiv>
    </>
  );
}

export default Mainpage;
