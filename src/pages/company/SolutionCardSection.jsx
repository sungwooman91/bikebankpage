import styled from "styled-components";
// bootstrap
import Card from "react-bootstrap/Card";
// pictures
import listImage from "../image/company_list_01_01.png";
import listImage2 from "../image/company_list_01_02.png";
import listImage3 from "../image/company_list_01_03.png";
// fadein
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";

const Container = styled.div`
  height: 508px;
  border-radius: 15px;
  /* margin: 0 auto; */
  display: flex;
  box-shadow: 5px 0 30px 0 rgb(125 125 125 / 16%);
  /* position: absolute; */

  .list_01 {
    margin-right: 24px;
    border-radius: 15px;
    box-shadow: 10px 0 30px 0 rgb(125 125 125 / 16%);
  }
  .list_02 {
    border-radius: 15px;
    box-shadow: 10px 0 30px 0 rgb(125 125 125 / 16%);
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
    width: 320px;
  }
`;

const SolutionCardSection = () => {
  const animateScroll = useScrollFadeIn();
  const animateScrollTwo = useScrollFadeIn();
  const animateScrollThree = useScrollFadeIn();

  const solutionTitleOne = "주행 경험";
  const solutionTitleTwo = "기술과 시스템";
  const solutionTitleThree = "서비스 인프라";

  return (
    <Container>
      <Card className="list_01" style={{ width: "24rem" }} {...animateScroll}>
        <Card.Img variant="top" src={listImage} />
        <Card.Body>
          <Card.Title className="title">{solutionTitleOne}</Card.Title>
          <Card.Text style={{ font: "18px" }}>
            차량 뿐만 아니라 서비스와 인프라까지
            <br />
            고객의 입장에서 이륜차 주행 경험을
            <br />
            고민하여 솔루션을 제공하고자 합니다.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <Card
        className="list_01"
        style={{ width: "24rem" }}
        {...animateScrollTwo}
      >
        <Card.Img variant="top" src={listImage2} />
        <Card.Body>
          <Card.Title className="title">{solutionTitleTwo}</Card.Title>
          <Card.Text>
            전자 계약 시스템과 APP을 이용하여
            <br />
            계약부터 서비스 이용까지 모든 업무가
            <br />
            편리해질 수 있도록 노력하고 있습니다.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <Card
        className="list_02"
        style={{ width: "24rem" }}
        {...animateScrollThree}
      >
        <Card.Img variant="top" src={listImage3} />
        <Card.Body>
          <Card.Title className="title">{solutionTitleThree}</Card.Title>
          <Card.Text>
            고객 중심의 차량 관리와 사고 수리를
            <br />
            어디에서나 지원 받으며 모두가 믿고 이용할 수 있는 서비스를 만들고자
            합니다.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SolutionCardSection;
