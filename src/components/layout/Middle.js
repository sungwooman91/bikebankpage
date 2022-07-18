import React from "react";
import styled from "styled-components";
import RentPage from "./contents/RentContext";
import VisualWeb from "./contents/VisualWeb";
import MainSolution from "./contents/MainSolution";
import Partners from "./contents/PartnersContext";
import GuaranteeContext from "./contents/GuaranteeContext";
import CheckpointContext from "./contents/CheckpointContext";

const MiddleDiv = styled.div`
  width: 90%;
  /* display: flex; */

  div {
    /* height: 500px; */
    // 영역 표시
    /* background-color: green; */
    width: 100%;

    /* padding-top: 100px; */
    padding-bottom: 20px;
    /* display: flex; */
  }

  .MainBack {
    // 영역 표시
    background-color: skyblue;
  }
`;

const Middle = () => {
  return (
    <MiddleDiv>
      <div>
        <VisualWeb />
      </div>
      <div id="solution">
        <MainSolution />
      </div>
      <div id="rent">
        <RentPage />
      </div>
      <div id="partners">
        <Partners />
      </div>
      <div id="check_point">
        <CheckpointContext />
      </div>
      <div id="guarantee">
        <GuaranteeContext />
      </div>
    </MiddleDiv>
  );
};

export default Middle;
