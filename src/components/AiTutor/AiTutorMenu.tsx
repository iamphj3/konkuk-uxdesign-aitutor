import { styled } from "styled-components";

import { BgAiTutor } from "../../assets/icons";
import EnterButton from "../Common/EnterButton";

const AiTutorMenu = () => {
  return (
    <StAiTutor>
      <StContent>
        <h2>UX Design AI 튜터</h2>
        <strong>UX Design AI Tutor</strong>
        <p>UX디자인과 관련된 내용을 AI 튜터에게 물어보세요.</p>
        <EnterButton
          bgColor="#fff"
          textColor="#5236FF"
          handleEnter={() => {}}
        ></EnterButton>
      </StContent>
      <StBgAiTutor />
    </StAiTutor>
  );
};

export default AiTutorMenu;

const StAiTutor = styled.div`
  position: relative;

  height: 58.5rem;
`;

const StContent = styled.div`
  position: absolute;
  top: 0;

  padding: 15rem 6rem;

  & > h2 {
    margin-bottom: 2.6rem;

    color: #fff;
    font-family: Nunito;
    font-size: 5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 110%; /* 5.5rem */
  }
  & > strong {
    color: #fff;
    font-family: Nunito;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 157.4%; /* 3.4628rem */
  }
  & > p {
    margin-top: 3.4rem;
    margin-bottom: 2.6rem;

    color: #fff;
    font-family: Nunito;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 157.4%;
  }
`;

const StBgAiTutor = styled(BgAiTutor)`
  width: 100%;
  height: auto;
  max-width: 140rem;
  max-height: 58.5rem;
`;
