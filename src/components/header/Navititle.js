import styled from "styled-components";

const NavigationTitle = styled.div`
  width: 100%;
  height: 300px;
  background-color: #ffdd6d;

  .navi_p {
    width: 1194px;
    margin: 0 auto;
    font-size: 36px;
    line-height: 300px;
    letter-spacing: -0.9px;
    font-weight: bold;
  }
`;
const Navititle = (props) => {
  // 메뉴버튼
  console.log("Props Data : ", props);
  return (
    <NavigationTitle className="navigation_01">
      <p className="navi_p">{props.title}</p>
    </NavigationTitle>
  );
};

export default Navititle;
