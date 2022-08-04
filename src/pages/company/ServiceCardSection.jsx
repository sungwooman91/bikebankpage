import styled from "styled-components";
// bootstrap
import Card from "react-bootstrap/Card";
// data
import { ServiceCardSectionData } from "./ServiceCardSectionData";
// fadein
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";
// image

const ServiceCardSection = () => {
  const animateScroll = useScrollFadeIn();

  return (
    <Container className="service_list" {...animateScroll}>
      {ServiceCardSectionData.map((item, index) => {
        return (
          <Card
            key={index}
            className="service_contents"
            style={{ width: "17.5rem" }}
          >
            <Card.Img className="img" variant="top" src={item.img} />
            <Card.Body className="service_body">
              <Card.Title className="title">{item.title}</Card.Title>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default ServiceCardSection;

const Container = styled.div`
  width: 1194px;
  overflow: hidden;
  margin: 0 auto;

  .service_contents {
    width: 380px;
    height: 300px;
    border-radius: 15px;
    box-shadow: 5px 0 30px 0 rgb(191 191 191 / 16%);
    float: left;
    border: 0;
    margin-right: 24px;
    background-color: #f8f8f8;
    background-repeat: no-repeat;
    background-position: 50% 0;
  }
  .service_contents:last-child {
    margin-right: 0px;
  }

  .img {
    width: 17.5rem;
    height: 260px;
  }
  .title {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.45px;
    color: #5d5d5d;
  }
`;
