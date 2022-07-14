import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const SideDiv = styled.div`
  width: 10%;
  position: fixed;
  right: 5rem;
  margin-top: 70px;
  // 영역 확인
  background-color: #f00;
  div {
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 15px;
  }
`;

const Side = () => {
  return (
    <SideDiv>
      <div>
        <Link to="solution" spy={true} smooth={true}>
          <span>SOLUTION</span>
        </Link>
        <Link to="rent" spy={true} smooth={true}>
          <span>RENT</span>
        </Link>
        <Link to="partners" spy={true} smooth={true}>
          <span>PARTNERS</span>
        </Link>
        <Link to="check_point" spy={true} smooth={true}>
          <span>CHECK POINT</span>
        </Link>
        <Link to="guarantee" spy={true} smooth={true}>
          <span>GUARANTEE</span>
        </Link>
      </div>
    </SideDiv>
  );
};

export default Side;
