import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
//email라이브러리
import {
  SectionStyle,
  BackImage,
  StyledContactForm,
  FormCheckBox,
  CheckList,
  StyledInput,
  FormTitle,
} from "./style";
import { Alert } from "./dialog";

export function HomeMain06() {
  const form = React.useRef(null);
  const [alertOpen, setAlertOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleAlert = () => {
    setAlertOpen((open) => !open);
  };
  const [values, setValues] = useState({
    user_name: "",
    user_phone: "",
  });
  const [checked, setChecked] = useState(true);
  // const [required, setRequired] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!values.user_name) {
      handleAlert();
      setMessage("이름을 올바르게 적어주세요");
      return;
    }
    if (!values.user_phone) {
      handleAlert();
      setMessage("연락처를 올바르게 적어주세요(숫자만입력)");
      return;
    }
    if (!checked) {
      handleAlert();
      setMessage("개인정보 취급에 동의해주세요!");
      return;
    }
    emailjs
      .sendForm(
        //zerostorm3@gmail.com
        "service_66yooy9", //"YOUR_SERVICE_ID"
        "template_1p7sg5f", //"YOUR_TEMPLATE_ID"
        e.currentTarget,
        "M9TQmuGUq3rdTGUP9" // "YOUR_USER_ID" // Account Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          handleAlert();
          setMessage("메세지가 전송되었습니다!");
        },
        (error) => {
          console.log(error.text);
          handleAlert();
          setMessage("오류가 발생했습니다. 다시시도해주세요.");
        }
      );
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCheckboxChange = (e: any) => {
    setChecked(e.target.checked);
  };

  return (
    <SectionStyle>
      <BackImage
        bgImage={`${process.env.BACKEND_URL}/img/BackImg/HomeMain06BackImg.png`}
      >
        <FormTitle>
          <div className="title">REGISTRATION</div>
          <div className="subtitle">관심고객등록</div>
        </FormTitle>
        <StyledContactForm>
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-layout">
              <div>
                <StyledInput>
                  <label>
                    <span className="star">*</span>이름
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    value={values.user_name}
                    onChange={handleInput}
                  />
                </StyledInput>
                <StyledInput>
                  <label>
                    <span className="star">*</span>연락처
                  </label>
                  <input
                    type="tel"
                    name="user_phone"
                    maxLength={11}
                    value={values.user_phone}
                    onChange={handleInput}
                    pattern="[0-9]{11}"
                  />
                </StyledInput>
                <StyledInput>
                  <label>Email</label>
                  <input type="email" name="user_email" />
                </StyledInput>
                <StyledInput>
                  <label>Message</label>
                  <input type="text" name="message" />
                </StyledInput>
                <div className="comment">
                  <span className="star">*</span>는 필수항목입니다.
                </div>
              </div>
              <div>
                <button type="submit"> 관심고객 등록하기</button>
              </div>
            </div>
            <FormCheckBox checked={checked}>
              <div className="check" />
              <input
                type="checkbox"
                id="rgs"
                name=""
                value="20"
                checked={checked}
                onChange={handleCheckboxChange}
              />
              <Link href="">개인정보 취급방침</Link>에 동의합니다.
            </FormCheckBox>
          </form>
        </StyledContactForm>
        <CheckList>
          <ul>
            <li>
              ※ 고객님의 개인정보는 개인정보보호법 및 정보통신망법에 따라
              안전하게 보관되며 분양 완료 후 자동 파기됩니다.
            </li>
            <li>
              ※ 고객님의 소중한 정보는 분양 이외의 목적으로 사용되지 않습니다.
            </li>
            <li>
              ※ 관심고객으로 등록된 고객님의 정보는 분양정보를 안내하는데
              사용합니다.
            </li>
          </ul>
        </CheckList>
        <Alert open={alertOpen} handleClose={handleAlert} message={message} />
      </BackImage>
    </SectionStyle>
  );
}
