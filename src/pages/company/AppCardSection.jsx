import styled from "styled-components";
// bootstrap
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// data
import { AppCardSectionData } from "./AppCardSectionData";
// fadein
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";
// image
import btn_google from "../image/btn_google.png";
import btn_apple from "../image/btn_apple.png";

const Container = styled.div`
  width: 1194px;
  min-height: 560px;
  margin: 0 auto;
  /* position: absolute; */
  white-space: pre-wrap;

  .app_contents {
    width: 380px;
    height: 500px;
    border-radius: 15px;
    box-shadow: 5px 0 30px 0 rgb(191 191 191 / 16%);
    float: left;
    margin-right: 27px;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: 50% 0;
  }
  .app_contents:last-child {
    margin-right: 0px;
  }

  .img {
    width: 22.9rem;
    height: 260px;
  }
  .title {
    font-size: 24px;
    font-weight: bold;
    line-height: 36px;
    padding-left: 20px;
  }
  .card-body {
    height: 180px;
  }
  .card-text {
    font-size: 18px;
    line-height: 30px;
    letter-spacing: -0.45px;
    color: #5d5d5d;
    padding-left: 20px;
    padding-bottom: 10px;
    width: 500px;
  }

  .btn {
    width: 120px;
    height: 35px;
    margin-left: 35px;
    border-radius: 4px;
    box-shadow: 5px 0 10px 0 rgb(125 125 125 / 16%);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    font-size: 0px;
    cursor: pointer;
  }
  .google_box {
    background-image: url(${btn_google});
  }
  .apple_box {
    background-image: url(${btn_apple});
  }
`;

const AppCardSection = () => {
  const animateScroll = useScrollFadeIn();

  return (
    <Container className="app_list" {...animateScroll}>
      {AppCardSectionData.map((item, index) => {
        return (
          <Card key={index} className="app_contents" style={{ width: "23rem" }}>
            <Card.Img className="img" variant="top" src={item.img} />
            <Card.Body className="tech_body">
              <Card.Title className="title">{item.title}</Card.Title>
              <Card.Text style={{ font: "18px" }}>{item.text}</Card.Text>
              <Button className="google_box" variant="light" />
              {item.id === 2 && (
                <Button className="apple_box" variant="light" />
              )}
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default AppCardSection;
