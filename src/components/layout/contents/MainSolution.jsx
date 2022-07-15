import React from "react";
import styled from "styled-components";

import imgSolution1 from "../../../Images/main_solution_01.png";
import imgSolution2 from "../../../Images/main_solution_02.png";
import imgSolution3 from "../../../Images/main_solution_03.png";

const SolitionDiv = styled.div`
  padding-top: 70px;
  .article p {
    /* background-color: skyblue; */
    font-size: 38px;
  }
  .article_title {
    color: #ffce30;
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
  }
  ul li {
    margin-right: 15px;
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
  // const imgSolution = "main_rent.png";
  return (
    <SolitionDiv>
      <div className="article">
        <h2 className="article_title">SOLUTION</h2>
        <p class="text">
          기술과 인프라를 바탕으로 제공하는
          <br />
          <span>이륜차 솔루션을 이용해보세요</span>
        </p>
        <ul className="contents">
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
