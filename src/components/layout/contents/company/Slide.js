import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { dataDigitalBestSeller } from "./data";

const Container = styled.div`
  height: 600px;
  border-radius: 15px;
  /* margin: 0 auto; */
  box-shadow: 5px 0 30px 0 rgb(125 125 125 / 16%);
  /* position: absolute; */
`;

const InfraShow = styled(Slider)`
  .slick-slide div {
    /* background-color: #0f0; */
    white-space: pre-wrap;
    margin-top: 30px;
  }
`;

const InfraTop = styled.div`
  text-align: center;
  /* background-color: #f00; */
  .infra_pic {
    margin: auto;
  }
`;
const InfraBot = styled.div`
  /* display: block; */
  text-align: center;
  /* background-color: #f0f; */

  p {
    font-size: 18px;
    color: #5d5d5d;
    line-height: 28px;
    vertical-align: baseline;
  }

  h3 {
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
    <Container>
      <InfraShow {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="infra_list">
            <InfraTop>
              <img src={item.img} alt={item.title} className="infra_pic" />
            </InfraTop>
            <InfraBot>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </InfraBot>
          </div>
        ))}
      </InfraShow>
    </Container>
  );
};

export default Slide;
