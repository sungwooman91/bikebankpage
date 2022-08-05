import React, { useState } from "react";
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";
// style & bootstrap
import styled from "styled-components";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
// data
// fadein
// image
import rentTapImage01 from "../image/rent_tab01_01.png";
import rentTapImage02 from "../image/rent_tab01_02.png";
import rentTapImage03 from "../image/rent_tab01_03.png";
import rentTapImage04 from "../image/rent_tab01_04.png";
import tapArrow from "../image/tab_arrow.png";

const RentProductTap = () => {
  const [key, setKey] = useState("bike");
  const animationTapImg = useScrollFadeIn();
  return (
    <TapBox className="tap_box" {...animationTapImg}>
      <Tabs
        id="controlled-tab"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="tap_rent"
        justify
      >
        <Tab eventKey="bike" title="차량 기종">
          <TabContents className="tab_content">
            <img src={rentTapImage01} alt="" />
          </TabContents>
        </Tab>
        <Tab eventKey="rent" title="렌트 종류">
          <TabContents className="tab_content">
            <img src={rentTapImage02} alt="" />
          </TabContents>
        </Tab>
        <Tab eventKey="take" title="인수 여부">
          <TabContents className="tab_content">
            <img src={rentTapImage03} alt="" />
          </TabContents>
        </Tab>
        <Tab eventKey="insurance" title="보험 연령">
          <TabContents className="tab_content">
            <img src={rentTapImage04} alt="" />
          </TabContents>
        </Tab>
      </Tabs>
    </TapBox>
  );
};

const TapBox = styled.div`
  .tap_rent {
    width: 100%;
    min-height: 80px;
    text-align: center;
    margin-bottom: 30px;
    border-bottom: none;
  }
  .nav-item {
    display: inline-block;
    width: 240px;
    height: 80px;
    text-align: left;
    border-radius: 15px;
    box-shadow: 5px 0 30px 0 rgb(191 191 191 / 16%);
    margin-right: 25px;
    line-height: 60px;
    font-size: 22px;
    letter-spacing: -0.55px;
    cursor: pointer;
    text-indent: 34px;
    background-image: url(${tapArrow});
    background-repeat: no-repeat;
    background-position: 237px 50%;
  }
  .nav-item:last-child {
    margin-right: 0px;
  }
  .nav-item .nav-link {
    width: 100%;
    height: 80px;
  }
  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
    color: #000000;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out;
  }

  .nav-link.active {
    border-radius: 15px;
    box-shadow: 5px 0 30px 0 rgb(191 191 191 / 16%);
    background-color: #ffe182;
    color: #000000;
    border-color: #dee2e6 #dee2e6 #fff;
  }
`;

const TabContents = styled.div`
  width: 1194px;
  height: 580px;
  margin: 0 auto;
  border-radius: 15px;
  box-shadow: 5px 0 30px 0 rgb(191 191 191 / 16%);

  img {
    padding: 30px 0 0 57px;
  }
`;
export default RentProductTap;
