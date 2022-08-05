import styled from "styled-components";
import LogoSrc from "../../Images/footer_logo.png";

export const Box = styled.footer`
  padding: 70px 60px;
  background: #434343;
  position: relative;
  transform: translateY(20%);
  width: 100%;
  /* display: none; */

  @media all and (min-width: 360px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 5px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 5px;

  @media all and (min-width: 360px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Heading = styled.p`
  color: #fff;
  margin-bottom: 30px;
  font-weight: bold;
  padding-bottom: 15px;
  border-bottom: 1px solid #999;
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  text-decoration: none;
  &:hover {
    color: orange;
    transition: 200ms ease-in;
  }
`;

export const FirmName = styled.h1`
  position: absolute;
  width: 127px;
  height: 19px;
  top: 300px;
  left: 50%;
  margin-left: -700px;
  font-size: 0px;
  background-image: url(${LogoSrc});
  background-repeat: no-repeat;
`;
export const Address = styled.address`
  color: #fff;
  position: absolute;
  top: 300px;
  right: 50%;
  margin-right: -600px;
  font-size: 15px;
`;
