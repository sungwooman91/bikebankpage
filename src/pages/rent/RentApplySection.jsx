import { useNavigate } from "react-router-dom";
// style & bootstrap
import Button from "react-bootstrap/Button";
import styled from "styled-components";
// data
import { RentApplySectionData } from "./RentApplySectionData";
// fadein

const RentApplySection = () => {
  const navigate = useNavigate();

  function handleUseNabigate() {
    navigate("/customer"); // /test로 url 이동
  }

  return (
    <RentList className="rent_list">
      {RentApplySectionData.map((item, index) => {
        return (
          <li key={index} style={{ backgroundImage: `url(${item.img})` }}>
            <p className="title">{item.title}</p>
            <p className="exp">{item.text}</p>
          </li>
        );
      })}
      <Button className="btn_rent" variant="light" onClick={handleUseNabigate}>
        이용문의
      </Button>
    </RentList>
  );
};

const RentList = styled.ul`
  width: 1080px;
  margin: 0 auto;
  white-space: pre-wrap;
  list-style: none;

  li {
    padding: 36px 0 36px 177px;
    border-bottom: 1px solid #777;
    background-repeat: no-repeat;
    background-position: 21px 50%;
  }

  .title {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.6px;
    font-weight: bold;
    padding-bottom: 5px;
  }
  .exp {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.45px;
    color: #5d5d5d;
  }

  .btn_rent {
    width: 227px;
    height: 65px;
    background-color: #434343;
    border-radius: 33px;
    margin: 0 auto;
    display: block;
    margin-top: 50px;
    color: #fff;
    line-height: 65px;
    text-align: center;
    font-size: 19px;
    padding: 1px 6px;
    cursor: pointer;
  }
`;

export default RentApplySection;
