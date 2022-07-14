import React from "react";
import styled from "styled-components";
import RentPage from "./contents/RentContext";
import VisualWeb from "./contents/VisualWeb";
import MainSolution from "./contents/MainSolution";
import Partners from "./contents/PartnersContext";
import GuaranteeContext from "./contents/GuaranteeContext";
import CheckpointContext from "./contents/CheckpointContext";

const MiddleDiv = styled.div`
  div {
    /* height: 500px; */
    // 영역 표시
    background-color: yellow;
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
      <div className="MainBack" id="solution">
        {/* <h2>SOLUTION</h2> */}
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
