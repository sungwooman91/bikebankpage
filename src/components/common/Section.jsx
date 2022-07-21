import React from "react";
import styled from "styled-components";

const SectionNum = styled.p`
  font-size: 100px;
  letter-spacing: -2.5px;
  padding: 0px 0 42px 0;
  font-weight: bold;
  font-family: "sf" !important;
`;

const SectionTitle = styled.p`
  padding-bottom: 22px;
  font-size: 38px;
  line-height: 52px;
  letter-spacing: -0.95px;

  p {
    white-space: pre-wrap;
  }

  span {
    font-weight: bold;
  }
`;

const SectionContext = styled.p`
  padding-bottom: 50px;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0/5px;
  color: #5d5d5d;
  white-space: pre-wrap;
`;

function Section(props) {
  const { id, title, subtitle, context, otherDiv } = props;
  return (
    <>
      <SectionNum>{id}</SectionNum>
      <SectionTitle>
        {title}
        <br />
        <span>{subtitle}</span>
      </SectionTitle>
      <SectionContext>{context}</SectionContext>
      <div>{otherDiv}</div>
    </>
  );
}

export default Section;
