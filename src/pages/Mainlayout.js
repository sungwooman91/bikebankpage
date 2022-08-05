import { BrowserRouter, Route, Routes } from "react-router-dom";
// Common Function
import Navber from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
// view page
import Mainpage from "./Mainpage";
import CompanyPage from "./company/CompanyPage";
import CustomerPage from "./customer/CustomerPage";
import RentPage from "./rent/RentPage";
import BikePage from "./bike/BikePage";
import RecruitPage from "./recruit/RecruitPage";

export const Mainlayout = () => {
  return (
    <>
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/rent" element={<RentPage />} />
          <Route path="/bike" element={<BikePage />} />
          <Route path="/customer" element={<CustomerPage />} />
          <Route path="/recruit" element={<RecruitPage />} />
          {/* 블로그 외부링크로 보내는 처리하기 */}
        </Routes>
        {/* </MainDiv> */}
        <Footer />
      </BrowserRouter>
    </>
  );
};
