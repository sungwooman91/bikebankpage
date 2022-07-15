import { css } from "@emotion/react";
import Footer from "./footer/Footer";
import Mainpage from "./Mainpage";
import styled from "styled-components";
// import Header from "./header/Header";
import Navber from "./header/Navbar";

const MainDiv = styled.div`
  margin: 3rem 5rem;
  // 영역
  /* background-color: #636; */
  width: 100%;
`;

export const Mainlayout = (props) => {
  return (
    <div className="main_wrap" css={wrapStyle}>
      <Navber />
      <MainDiv>
        <Mainpage />
      </MainDiv>
      <Footer />
    </div>
  );
};

const wrapStyle = css`
  .text {
    background-color: #f5f5f5;
  }
  .coloredText {
    background-color: #ffb600;
  }
`;
