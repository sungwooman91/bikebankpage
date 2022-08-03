import React from "react";
import styled from "styled-components";
import check_bg from "../image/check_bg.jpg";

import { useScrollFadeIn } from "../../hook/useScrollFadeIn";

const CheckpointeDiv = styled.div`
  background: url(${check_bg});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: auto 100%;
  width: 100%;
  height: 800px;

  /* margin: 0 auto; */

  div p {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
  }

  .text {
    padding-top: 20px;
    color: #fff;
    font-size: 38px;
    line-height: 54px;
    font-weight: bold;
  }

  .article_title {
    font-size: 24px;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: -0.6px;
    color: #fff;
  }
`;

export const Box = styled.div`
  width: 1080px;
  margin: 0 auto;
  padding-top: 141px;
`;

export const Container = styled.div`
  display: block;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Row = styled.ul`
  padding-top: 239px;
  overflow: hidden;
  width: 100%;
  display: flex;

  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

export const Column = styled.li`
  width: 343px;
  float: left;
  color: #fff;
  margin-right: 24px;
  transform: translate(0px, 0px);
  opacity: 1;
`;

export const Heading = styled.p`
  font-size: 24px;
  font-family: "sf" !important;
  padding-bottom: 9px;
  border-bottom: 2px solid #fff;
`;

export const Context = styled.p`
  padding: 10px 0 5px 0;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: -0.6px;
  font-weight: bold;

  .text {
    font-size: 18px;
    line-height: 28px;
    letter-spacing: -0.45px;
    font-weight: bold;
  }
`;

const CheckpointContext = () => {
  const animatedItemOne = useScrollFadeIn();

  return (
    <CheckpointeDiv className="check_point_wrap">
      <Box className="check_point">
        <div className="title">
          <h2 className="article_title">CHECK POINT</h2>
          <p className="text">
            배달용 렌트의 기준
            <br />세 가지를 꼭 체크하세요
          </p>
        </div>
        <Container {...animatedItemOne}>
          <Row>
            <Column>
              <Heading>01.</Heading>
              <Context>
                보험보장
                <p className="text">합리적인 가격과 폭 넓은 보장 범위</p>
              </Context>
            </Column>
            <Column>
              <Heading>02.</Heading>
              <Context>
                관리편의성
                <p className="text">이륜차에 특화된 관리 서비스</p>
              </Context>
            </Column>
            <Column>
              <Heading>03.</Heading>
              <Context>
                렌트비용
                <p className="text">낮은 비용으로 사업 부담 감소</p>
              </Context>
            </Column>
          </Row>
        </Container>
      </Box>
    </CheckpointeDiv>
  );
};

export default CheckpointContext;
