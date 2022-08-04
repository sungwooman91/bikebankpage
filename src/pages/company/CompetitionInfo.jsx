import styled from "styled-components";

// data
import competition from "../image/competition.png";
import { CompetitionText } from "./CompetitionText";
// fadein
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";

const Container = styled.img`
  display: block;
  margin: 0 auto;
  padding-bottom: 60px;
  /* position: absolute; */
`;

const CompetitionList = styled.ul`
  overflow: hidden;
  width: 1080px;
  margin: 0 auto;
  /* position: absolute; */
`;

const ListBox = styled.li`
  width: 504px;
  margin-right: 20px;
  border-top: 1px solid #000;
  padding-top: 20px;
  margin-bottom: 49px;
  float: left;
  white-space: pre-wrap;

  .title {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: -0.6px;
    font-weight: bold;
  }

  .exp {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.45px;
    color: #5d5d5d;
    vertical-align: baseline;
  }
`;

const CompetitionInfo = () => {
  const animateScroll = useScrollFadeIn();

  return (
    <>
      <Container
        className="competition_01"
        src={competition}
        alt=""
        {...animateScroll}
      />
      <CompetitionList className="competition_list">
        {CompetitionText.map((item, index) => {
          return (
            <ListBox key={index} className="box">
              <p className="title">{item.header}</p>
              <p className="exp">{item.body}</p>
            </ListBox>
          );
        })}
      </CompetitionList>
    </>
  );
};

export default CompetitionInfo;
