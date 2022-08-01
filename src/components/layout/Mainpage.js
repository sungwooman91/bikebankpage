import React from "react";
import styled from "styled-components";

// import Side from "./sidebar/Side";
import VisualWeb from "./contents/home/VisualWeb";
import MainSolution from "./contents/home/MainSolutionContext";
import RentPage from "./contents/home/RentContext";
import Partners from "./contents/home/PartnersContext";
import CheckpointContext from "./contents/home/CheckpointContext";
import GuaranteeContext from "./contents/home/GuaranteeContext";
import GuaranteeContextArea from "./contents/home/GuaranteeContextArea";
import GuaranteeContextPrice from "./contents/home/GuaranteeContextPrice";

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
