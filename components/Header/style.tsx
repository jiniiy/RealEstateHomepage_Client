import styled from "@emotion/styled";

export const HeaderStyle = styled.header<{ isDropdownOpen: boolean }>`
  position: fixed;
  display: flex;
  overflow: hidden;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 18px;
  transition: 0.3s ease;
  height: ${({ isDropdownOpen }) => (isDropdownOpen ? "200px" : "50px")};
  opacity: ${({ isDropdownOpen }) => (isDropdownOpen ? 1 : 0.5)};
  background-color: ${({ isDropdownOpen }) =>
    isDropdownOpen ? "#0c134f" : "rgba(255,255,255,0.5)"};
`;

export const BuggerMenu = styled.div`
  width: 100%;
  padding-top: 5px;
  padding-left: 30.5px;
`;

export const StyledList = styled.div`
  width: 20%;
  height: 150px;
  :hover {
    color: black;
    background-color: white;
    transition: 0.3s ease;
    height: 200px;
  }
  div {
    padding: 16px 0;
    text-align: center;
    height: 50px;
    font-size: 18px;
    line-height: 100%;
  }
  ul {
    list-style-type: none;
  }
  ul li {
    text-align: center;
    font-size: 14px;
    line-height: 35px;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const TelInfo = styled.div`
  float: right;
  height: 50px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: whitesmoke;
`;
