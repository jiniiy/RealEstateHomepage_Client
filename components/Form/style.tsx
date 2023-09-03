import styled from "@emotion/styled";

export const SectionStyle = styled.div`
  width: 100%;
  height: 1050px;
  background-color: #0c134f;
`;

export const BackImage = styled.div<{ bgImage: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: 4100px 100%;
  background-repeat: no-repeat;
  background-position: -1000px 0;
`;

// Styles
export const StyledContactForm = styled.div`
  margin: 70px 0px;
  .form-layout {
    display: flex;
  }
  .comment {
    padding-left: 130px;
  }
  .star {
    line-height: 100%;
    font-size: 20px;
    color: orange;
  }
  form {
    span {
      font-size: 12px;
      padding: 3px;
      color: red;
    }

    button[type="submit"] {
      margin: 10px 0;
      padding: 20px;
      /* margin-top: 2rem; */

      width: 140px;
      height: calc(100% - 41px);
      cursor: pointer;
      background-color: #0052a4;
      color: white;
      font-size: 28px;
      border: none;
    }
  }
`;

// export const ErrorName = styled.div`
//   font-size: 12px;
//   padding: 3px;
//   color: white;
//   display: none;
// `;

// export const ErrorPhone = styled.div`
//   font-size: 12px;
//   padding: 3px;
//   color: white;
//   display: none;
// `;

export const FormCheckBox = styled.label<{ checked: boolean }>`
  margin-top: 30px;
  margin-left: 100px;
  width: 100%;
  display: flex;
  position: relative;
  cursor: pointer;
  .check {
    display: ${({ checked }) => (checked ? "block" : "none")};
    position: absolute;
    z-index: 2;
    top: 2px;
    left: 2px;
    width: 15px;
    height: 15px;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    background-color: red;
  }
  input[type="checkbox"] {
    appearance: none;
    background-color: #fff;
    margin-right: 10px;
    font: inherit;
    color: currentColor;
    width: 20px;
    height: 20px;
    border: 0.15em solid currentColor;
    transform: translateY(-0.075em);
  }
  a {
    height: 20px;
    text-decoration: underline;
  }
`;
export const CheckList = styled.div`
  ul li {
    list-style: none;
  }
`;

export const HomeText = styled.div`
  /* position: relative; */
  /* visibility: hidden; */
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 1000px;
  padding-top: 100px;

  color: white;

  /* background-color: red; */

  /* :hover {
    
  } */
`;

/* text-align: center; */
export const Text = styled.p<{
  color?: string;
  fontSize?: number;
  margin?: string;
}>`
  color: ${({ color }) => color ?? "white"};
  font-size: ${({ fontSize }) => fontSize ?? 16}px;
  margin: ${({ margin }) => margin ?? 0};
`;

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;

  label {
    .star {
      font-size: 20px;
      margin-right: 5px;
      color: orange;
    }
    display: block;
    line-height: 40px;
    /* height: 50px; */
    width: 100px;
    text-align: right;
    color: white;
    font-size: 20px;
    margin-right: 20px;
  }
  input {
    padding: 10px;
    color: black;
    font-size: 18px;
    background-color: white;
    width: 410px;
    height: 40px;
    border: none;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
  }
`;
export const FormTitle = styled.div`
  margin-bottom: 80px;
  text-align: center;
  .title {
    font-weight: 700;
    color: white;
    font-size: 40px;
  }
  .subtitle {
    color: #ffffff80;
    font-size: 20px;
  }
`;
