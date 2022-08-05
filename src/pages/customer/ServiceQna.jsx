import React, { useState } from "react";
import styled from "styled-components";
import { Accordion } from "react-bootstrap";
import { useScrollFadeIn } from "../../hook/useScrollFadeIn";

import qnaContext from "./qnaContext.json";

export const ServiceComponent = styled.div`
  width: 1194px;
  margin: 0 auto;
  /* border-top: 1px solid #999; */
  list-style: none;

  .title {
    padding: 20px 0px;
    text-indent: 56px;
    border-bottom: 1px solid #999;
    font-size: 18px;
    color: #5d5d5d;
    letter-spacing: -0.5px;
    background-image: url(../images/btn_down.png);
    background-repeat: no-repeat;
    background-position: 98% 50%;
    cursor: pointer;
  }

  span {
    font-size: 15px;
  }
`;

const ServiceQna = () => {
  const animatedItem = useScrollFadeIn();

  return (
    <>
      <ServiceComponent className="qna_box" {...animatedItem}>
        <Accordion defaultActiveKey={["0"]} alwaysOpen>
          {qnaContext.map((data, index) => {
            return (
              <Accordion.Item key={index} eventKey={data.key}>
                <Accordion.Header>{data.header}</Accordion.Header>
                <Accordion.Body>
                  {data.body.split("\n").map((line, index) => {
                    return (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    );
                  })}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </ServiceComponent>
    </>
  );
};

export default ServiceQna;
