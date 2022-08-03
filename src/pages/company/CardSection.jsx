import Card from "react-bootstrap/Card";
import styled from "styled-components";

import listImage from "../image/company_list_01_01.png";
import listImage2 from "../image/company_list_01_02.png";
import listImage3 from "../image/company_list_01_03.png";

const Container = styled.div`
  height: 600px;
  border-radius: 15px;
  /* margin: 0 auto; */
  display: inline-flex;
  box-shadow: 5px 0 30px 0 rgb(125 125 125 / 16%);
  /* position: absolute; */
`;

const CardSection = () => {
  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={listImage} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={listImage2} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={listImage3} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CardSection;
