import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const SideDiv = styled.div`
  width: 10%;
  position: fixed;
  right: 5rem;
  margin-top: 70px;
  // 영역 확인
  background-color: #fff;

  div {
    display: flex;
    flex-direction: column;
  }

  p {
    color: #ffce30;
    font-size: 20px;
    font-weight: bold;
  }
`;

const Side = () => {
  return (
    <SideDiv>
      <div>
        <Link to="solution" spy={true} smooth={true}>
          <p>SOLUTION</p>
        </Link>
        <Link to="rent" spy={true} smooth={true}>
          <p>RENT</p>
        </Link>
        <Link to="partners" spy={true} smooth={true}>
          <p>PARTNERS</p>
        </Link>
        <Link to="check_point" spy={true} smooth={true}>
          <p>CHECK POINT</p>
        </Link>
        <Link to="guarantee" spy={true} smooth={true}>
          <p>GUARANTEE</p>
        </Link>
      </div>
    </SideDiv>
  );
};

export default Side;
