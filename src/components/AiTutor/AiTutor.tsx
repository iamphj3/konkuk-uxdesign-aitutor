import { styled } from "styled-components";

import { BgAiTutor } from "../../assets/icons";

const AiTutor = () => {
  return (
    <StAiTutor>
      <StContent>
        <h2>UX Design AI 튜터</h2>
        <strong>UX Design AI Tutor</strong>
        <p>UX디자인과 관련된 내용을 AI 튜터에게 물어보세요.</p>
        <StEnter type="button">바로가기</StEnter>
      </StContent>
      <BgAiTutor />
    </StAiTutor>
  );
};

export default AiTutor;

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

const StEnter = styled.button`
  display: flex;
  padding: 2rem 4.5rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 3.9rem;
  background: #fff;

  color: #5236ff;
  font-family: Nunito;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
