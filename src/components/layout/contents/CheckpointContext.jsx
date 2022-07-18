import React from "react";
import styled from "styled-components";
import check_bg from "./image/check_bg.jpg";

const CheckpointeDiv = styled.div`
  background: url(${check_bg});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: auto 100%;

  div p {
    font-size: 20px;
    color: #fff;
  }

  .content_text {
    font-size: 40px;
    font-weight: bold;
  }
  .title {
    padding-top: 70px;
    margin-left: 60px;
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
  padding: 20px 60px;
  position: relative;
  display: flex;
  width: 50%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 5px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 5px;
`;

export const Heading = styled.p`
  color: #fff;
  margin-bottom: 30px;
  font-weight: bold;
  padding-bottom: 30px;
  border-bottom: 1px solid #999;
`;

export const Context = styled.p`
  color: #fff;
  margin-bottom: 10px;
  text-decoration: none;
`;

const CheckpointContext = () => {
  return (
    <CheckpointeDiv>
      <div className="title">
        <h2 className="article_title">CHECK POINT</h2>
        <p class="content_text">
          배달용 렌트의 기준
          <br />세 가지를 꼭 체크하세요
        </p>
      </div>
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>01.</Heading>
              <Context>보험보장</Context>
              <Context>합리적인 가격과 폭 넓은 보장 범위</Context>
            </Column>
            <Column>
              <Heading>02.</Heading>
              <Context>관리편의성</Context>
              <Context>이륜차에 특화된 관리 서비스</Context>
            </Column>
            <Column>
              <Heading>03.</Heading>
              <Context>렌트비용</Context>
              <Context>낮은 비용으로 사업 부담 감소</Context>
            </Column>
          </Row>
        </Container>
      </Box>
    </CheckpointeDiv>
  );
};

export default CheckpointContext;
