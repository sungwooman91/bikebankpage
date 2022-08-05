import React from "react";
import styled from "styled-components";

const SectionNum = styled.p`
  font-size: 100px;
  letter-spacing: -2.5px;
  padding: 0px 0 42px 0;
  font-weight: bold;
  font-family: "sf" !important;
  width: 1194px;
  margin: 0 auto;
`;

const SectionTitle = styled.p`
  padding-bottom: 22px;
  font-size: 38px;
  line-height: 52px;
  letter-spacing: -0.95px;
  width: 1194px;
  margin: 0 auto;
  white-space: pre-wrap;

  span {
    font-weight: bold;
  }
`;

const SectionContext = styled.p`
  padding-bottom: 70px;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0/5px;
  color: #5d5d5d;
  width: 1194px;
  margin: 0 auto;
  white-space: pre-wrap;
`;

function Section(props) {
  const { id, title, subtitle, context, context_2 } = props;

  return (
    <>
      <SectionNum>{id}</SectionNum>
      <SectionTitle>
        {title}
        <br />
        {<span>{subtitle}</span>}
      </SectionTitle>
      <SectionContext>
        {context}
        <br />
        {context_2}
      </SectionContext>
    </>
  );
}

export default Section;
