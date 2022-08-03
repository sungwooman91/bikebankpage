import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  FirmName,
  Address,
} from "./FooterStyles.js";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>바이크뱅크</Heading>
            <FooterLink href="#">바이크뱅크</FooterLink>
            <FooterLink href="#">편리한 기술</FooterLink>
            <FooterLink href="#">이륜차 인프라</FooterLink>
          </Column>
          <Column>
            <Heading>렌트소개</Heading>
            <FooterLink href="#">이용안내</FooterLink>
            <FooterLink href="#">상품안내</FooterLink>
            <FooterLink href="#">보장안내</FooterLink>
            <FooterLink href="#">서비스안내</FooterLink>
          </Column>
          <Column>
            <Heading>차량소개</Heading>
            <FooterLink href="#">라인업</FooterLink>
            <FooterLink href="#">보증정책</FooterLink>
            <FooterLink href="#">서비스안내</FooterLink>
          </Column>
          <Column>
            <Heading>고객지원</Heading>
            <FooterLink href="#">서비스 문의</FooterLink>
            <FooterLink href="#">서비스 네트워크</FooterLink>
            <FooterLink href="#">자주 묻는 질문</FooterLink>
          </Column>
          <Column>
            <Heading>채용</Heading>
            <FooterLink href="#">채용안내</FooterLink>
          </Column>
          <Column>
            <Heading>Follow us</Heading>
            <FooterLink href="#">Kakao </FooterLink>
            <FooterLink href="#">Blog </FooterLink>
          </Column>
          <Column>
            <FirmName>Bikebank</FirmName>
            <Address>
              바이크뱅크 주식회사 | 사업자 등록번호 : 171-86-01585 | 대구광역시
              달서구 성서공단로 11길 62, 5층 | 고객센터 1522-9008
            </Address>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};

export default Footer;
