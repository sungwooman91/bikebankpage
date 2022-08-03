import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Navber from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

import Mainpage from "./Mainpage";
import Company from "./company/Company";
import Customer from "./customer/Customer";
import Rent from "./rent/Rent";

const MainDiv = styled.div`
  // 영역
  /* background-color: #636; */
  width: 100%;
  display: block;
`;

export const Mainlayout = () => {
  return (
    <>
      <BrowserRouter>
        <Navber />
        <MainDiv>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/company" element={<Company />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/bike" element={<Mainpage />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/recruit" element={<Company />} />
            {/* 블로그 외부링크로 보내는 처리하기 */}
          </Routes>
        </MainDiv>
        <Footer />
      </BrowserRouter>
    </>
  );
};
