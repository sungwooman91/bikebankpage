// import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
// import { Card, Button } from "react-bootstrap";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { dataDigitalBestSeller } from "./data";

const InfraShow = styled(Slider)`
  /* background-color: #0f0; */

  .slick-slide div {
    /* background-color: #0f0; */
    white-space: pre-wrap;
    margin-top: 40px;
  }

  .infra_list {
    /* text-align: center; */
    /* background-color: #ff0; */
    /* display: block; */
  }
  .infra_top {
    text-align: center;
    /* background-color: #f00; */
  }

  .infra_pic {
    /* display: block; */
    margin: auto;
    /* background-color: #f0f; */
  }
  .infra_bottom {
    text-align: center;
  }
  .infra_bottom p {
    font-size: 18px;
    color: #5d5d5d;
    line-height: 28px;
    vertical-align: baseline;
  }
  .infra_bottom h3 {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.6px;
    font-weight: bold;
    vertical-align: baseline;
  }
`;

const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // centerMode: true,
  };

  return (
    <div className="container">
      <InfraShow {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="infra_list">
            <div className="infra_top">
              <img src={item.img} alt={item.title} className="infra_pic" />
            </div>
            <div className="infra_bottom">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </InfraShow>
    </div>
  );
};

export default Slide;
