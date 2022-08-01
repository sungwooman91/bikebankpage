import React from "react";
import styled from "styled-components";

const SectionTitle = styled.p`
  width: 1194px;
  margin: 0 auto;
  padding-bottom: 20px;
  font-size: 38px;
  line-height: 52px;
  letter-spacing: -0.95px;
  font-weight: bold;
`;

const SectionContext = styled.p`
  width: 1194px;
  margin: 0 auto;
  padding-bottom: 60px;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.5px;
  color: #5d5d5d;
`;

function SectionSub(props) {
  const { title, context } = props;
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <SectionContext>{context}</SectionContext>
    </>
  );
}

export default SectionSub;
