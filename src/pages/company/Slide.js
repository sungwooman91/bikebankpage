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
    white-space: pre-wrap;
    margin-top: 30px;
  }
`;

const InfraTop = styled.div`
  text-align: center;
  .infra_pic {
    margin: auto;
  }
`;

const InfraBot = styled.div`
  text-align: center;

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
    <SlideContainer>
      <Container>
        <InfraShow {...settings}>
          {dataDigitalBestSeller.map((item, index) => (
            <div key={index} className="infra_list">
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
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 145px 0 0px 0px;
`;

export default Slide;
