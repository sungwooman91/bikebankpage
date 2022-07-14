import React from "react";
import styled from "styled-components";
import imgSolution from "./main_rent.png";

const SolitionDiv = styled.div`
  div {
    /* background-color: skyblue; */
  }
`;

const MainSolution = () => {
  // const imgSolution = "main_rent.png";
  return (
    <SolitionDiv>
      <div className="title">
        <h2>SOLUTION</h2>
        <p class="text">
          기술과 인프라를 바탕으로 제공하는
          <br />
          <span>이륜차 솔루션을 이용해보세요</span>
        </p>
        <ul className="contents">
          <li>
            <img src={imgSolution} alt="이륜차 렌트" />
            <p>이륜차 렌트</p>
          </li>
          <li>
            <img src={imgSolution} alt="이륜차 판매" />
            <p>이륜차 판매</p>
          </li>
          <li>
            <img src={imgSolution} alt="서비스 네트워크" />
            <p>서비스 네트워크</p>
          </li>
        </ul>
      </div>
    </SolitionDiv>
  );
};

export default MainSolution;
