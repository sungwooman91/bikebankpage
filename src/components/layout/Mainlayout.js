import { BrowserRouter, Route, Routes } from "react-router-dom";

import Footer from "./footer/Footer";
import Mainpage from "./Mainpage";
import styled from "styled-components";
import Navber from "./header/Navbar";

import Company from "./contents/company/Company";
import Customer from "./contents/customer/customer";
import Rent from "./contents/rent/Rent";

const MainDiv = styled.div`
  margin: 3rem 5rem;
  // 영역
  /* background-color: #636; */
  width: 100%;
`;

export const Mainlayout = (props) => {
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
