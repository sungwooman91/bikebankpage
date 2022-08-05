import styled from "styled-components";

// data
import { ChallengeListData } from "./ChallengeListData";
// fadein
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";

const ChallengeListBox = styled.ul`
  overflow: hidden;
  width: 1080px;
  margin: 0 auto;
  white-space: pre-wrap;
`;

const ChallengeText = styled.li`
  float: left;
  width: 300px;
  margin-right: 48px;

  .title {
    font-size: 62px;
    font-family: "sf" !important;
    color: #ffc400;
    padding-bottom: 13px;
    border-bottom: 3px solid #ffc400;
    font-weight: bold;
  }
  ul {
    padding-left: 0.5rem;
  }
  ul > li {
    font-size: 19px;
    color: #5d5d5d;
    line-height: 40px;
    letter-spacing: -0.5px;
  }
`;

const ChallengeList = () => {
  const animateScroll = useScrollFadeIn();

  return (
    <>
      <ChallengeListBox className="competition_list" {...animateScroll}>
        {ChallengeListData.map((item, index) => {
          return (
            <ChallengeText key={index} className="box">
              <li>
                <p className="title">{item.year}</p>
                <ul>
                  {item.body.map((text, key) => {
                    return (
                      <li key={key} className="exp">
                        {text}
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ChallengeText>
          );
        })}
      </ChallengeListBox>
    </>
  );
};

export default ChallengeList;
