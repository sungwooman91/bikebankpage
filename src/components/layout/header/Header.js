import { css } from "@emotion/react";
import Navber from "./Navbar";

export default function Header() {
  return (
    <header css={headerStyle}>
      <Navber />
      asdfsadf
    </header>
  );
}

const headerStyle = (isPoint) => css`
  height: 64px;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #cf1313;
`;
