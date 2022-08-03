import React from "react";
import styled from "styled-components";

import { useScrollFadeIn } from "../../hook/useScrollFadeIn";
import background from "../image/background_yellow.jpg";
import imgSolution1 from "../image/main_solution_01.png";
import imgSolution2 from "../image/main_solution_02.png";
import imgSolution3 from "../image/main_solution_03.png";

const SolitionDiv = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding: 163px 0 163px 0;

  .title {
    /* background-color: skyblue; */

    background-image: url(${background});
    background-size: 345px 3px;
    background-position: 100% 56px;
    background-repeat: no-repeat;
  }
  .title .text {
    margin-top: 20px;
    font-size: 38px;
    line-height: 1.37;
    color: #000;
    letter-spacing: -1.9px;
  }

  .title h2 {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.6px;
    color: #ffc400;
  }
  .text {
    margin-top: 20px;
    font-size: 38px;
    line-height: 1.37;
    color: #000;
    letter-spacing: -1.9px;
  }
  .text > span {
    font-weight: bold;
  }

  ul {
    display: flex;
    opacity: 1;
    transform: translate(0px, 0px);
  }
  ul li {
    float: left;
    margin-right: 21px;
  }
  .contents {
    padding-top: 52px;
    overflow: hidden;
  }

  .contents li > p {
    font-size: 20px;
    line-height: 1.6;
    letter-spacing: -0.5px;
    color: #272727;
    padding-top: 10px;
  }
`;

const MainSolution = () => {
  const animatedItem = useScrollFadeIn();
  return (
    <SolitionDiv>
      <div className="title">
        <h2>SOLUTION</h2>
        <p className="text">
          기술과 인프라를 바탕으로 제공하는
          <br />
          <span>이륜차 솔루션을 이용해보세요</span>
        </p>
        <ul className="contents" {...animatedItem}>
          <li>
            <img src={imgSolution1} alt="이륜차 렌트" />
            <p>이륜차 렌트</p>
          </li>
          <li>
            <img src={imgSolution2} alt="이륜차 판매" />
            <p>이륜차 판매</p>
          </li>
          <li>
            <img src={imgSolution3} alt="서비스 네트워크" />
            <p>서비스 네트워크</p>
          </li>
        </ul>
      </div>
    </SolitionDiv>
  );
};

export default MainSolution;
