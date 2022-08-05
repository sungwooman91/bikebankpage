import React, { useState, useEffect, useRef } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-scroll";
import styled from "styled-components";

const SubHeaderBarTest = () => {
  const menubarHeight = 45;
  const scrollOffest = -menubarHeight;

  const navBarWrapper = useRef(null);

  const [fixedTop, setFixedTop] = useState(false);

  const onScroll = () => {
    if (
      window.scrollY > 0 &&
      navBarWrapper.current.getBoundingClientRect().top <= 0
    ) {
      setFixedTop(true);
    } else {
      setFixedTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <SubHeaderDiv className="sub_menu_wrap">
      <SubMenuDiv className="sub_menu">
        <ul className="sub_ul">
          <li className="sub_text" onclick="fnMove_rent('01')">
            이용안내
          </li>
          <li className="sub_text" onclick="fnMove_rent('02')">
            상품안내
          </li>
          <li className="sub_text" onclick="fnMove_rent('03')">
            보장안내
          </li>
          <li className="sub_text" onclick="fnMove_rent('04')">
            서비스 안내
          </li>
        </ul>
      </SubMenuDiv>
    </SubHeaderDiv>
  );
};

const SubHeaderDiv = styled.div`
  width: 100%;
  height: 100px;
  position: relative;
`;

const SubMenuDiv = styled.div`
  width: 100%;
  height: 100px;
  margin: 0 auto;
  box-shadow: 0 8px 15px 0 rgb(212 212 212 / 16%);
  background-color: #fff;

  .sub_ul {
    width: 1194px;
    height: 100px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 29px;
  }
  li {
    float: left;
    height: 43px;
    padding: 0 37px;
    border-radius: 22px;
    color: #000;
    line-height: 43px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s;
  }
`;
export default SubHeaderBarTest;
