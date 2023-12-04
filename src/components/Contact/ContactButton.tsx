import { styled } from "styled-components";

import { IcContact } from "../../assets/icons";
import EnterButton from "../Common/EnterButton";

const ContactButton = () => {
  return (
    <StContactButton>
      <StTitle>
        <IcContact />
        <StTitleContent>
          <h3>교수님 연락처</h3>
          <p>Contact</p>
        </StTitleContent>
      </StTitle>
      <StDescription>김지인 교수님 전화번호, 이메일, 연구실 위치</StDescription>
      <StBtnWrapper>
        <EnterButton handleEnter={() => {}}></EnterButton>
      </StBtnWrapper>
    </StContactButton>
  );
};

export default ContactButton;

const StContactButton = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: flex-start;
  gap: 1rem;

  height: 42.4rem;
  padding: 4.2rem 3.9rem;

  border-radius: 3rem;
  background: #f9f9f9;
  box-sizing: border-box;
`;

const StTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 2.6rem;

  margin-bottom: 2.7rem;
`;

const StTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > h3 {
    color: #242331;
    font-family: Nunito;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 110%; /* 3.3rem */
  }
  & > p {
    color: #797979;
    text-align: center;
    font-family: Nunito;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 157.4%; /* 3.4628rem */
  }
`;

const StDescription = styled.p`
  height: 10.2rem;

  color: #797979;
  font-family: Nunito;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 157.4%; /* 3.4628rem */
`;

const StBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
`;
