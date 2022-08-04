import styled from "styled-components";
// bootstrap
import Card from "react-bootstrap/Card";
// data
import { TechCardSectionData } from "./TechCardSectionData";
// fadein
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";

const Container = styled.div`
  height: 458px;
  border-radius: 15px;
  /* margin: 0 auto; */
  display: flex;
  box-shadow: 5px 0 30px 0 rgb(125 125 125 / 16%);
  /* position: absolute; */
  white-space: pre-wrap;

  .tech_list {
    margin-right: 24px;
    border-radius: 15px;
    box-shadow: 10px 0 30px 0 rgb(125 125 125 / 16%);
  }
  .tech_list:last-child {
    margin-right: 0px;
  }

  .title {
    font-size: 24px;
    font-weight: bold;
    line-height: 36px;
    padding: 0 0 0 30px;
  }

  .card-text {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.45px;
    color: #5d5d5d;
    padding-left: 30px;
    width: 500px;
  }
`;

const TechCardSection = () => {
  const animateScroll = useScrollFadeIn();

  return (
    <Container {...animateScroll}>
      {TechCardSectionData.map((item, index) => {
        return (
          <Card key={index} className="tech_list" style={{ width: "40rem" }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body className="tech_body">
              <Card.Title className="title">{item.title}</Card.Title>
              <Card.Text style={{ font: "18px" }}>{item.text}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default TechCardSection;
