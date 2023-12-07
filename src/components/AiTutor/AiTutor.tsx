import { useState } from 'react';
import { styled } from 'styled-components';

import { IcCheckAfter, IcCheckBefore } from '../../assets/icons';
import BaseLayout from '../Common/BaseLayout';

const AiTutor = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    setExpanded(!expanded);
  };

  const openFullScreen = () => {
    window.open(
      "https://www.chatbase.co/chatbot-iframe/3t6nItqHc-BZCQGWHrypM",
      "_blank"
    );
  };

  return (
    <BaseLayout
      headerName="AI Tutor"
      headerDescription={
        <p>
          UX Design 개념에 대해 궁금한 점이 있으면 AI Tutor에게 질문해주세요.
          <br />
          수강관리 등 행정적인 문의사항은 김지인 교수님께 직접 문의하시는 것이
          정확합니다.
        </p>
      }
    >
      <StAiTutor $expanded={expanded}>
        <StSettingWrapper>
          <StAlert>
            ⚠️ 한글 일부가 깨지는 문제 해결을 위해 현재 조치 중이며, 신속히
            해결하도록 하겠습니다.
          </StAlert>
          <StSettings>
            <StCheckboxLabel>
              {expanded ? <StIcCheckAfter /> : <StIcCheckBefore />}
              채팅창 길이 늘리기
              <StCheckbox
                type="checkbox"
                checked={expanded}
                onChange={toggleHeight}
              />
            </StCheckboxLabel>
            <StFullScreen type="button" onClick={openFullScreen}>
              전체화면
            </StFullScreen>
          </StSettings>
        </StSettingWrapper>
        <iframe src="https://www.chatbase.co/chatbot-iframe/3t6nItqHc-BZCQGWHrypM"></iframe>
      </StAiTutor>
    </BaseLayout>
  );
};

export default AiTutor;

const StIcCheckAfter = styled(IcCheckAfter)`
  width: 100%;
  height: auto;
  max-width: 2.3rem;
  max-height: 2.3rem;
`;

const StIcCheckBefore = styled(IcCheckBefore)`
  width: 100%;
  height: auto;
  max-width: 2.3rem;
  max-height: 2.3rem;
`;

const StCheckboxLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;

  height: 2.3rem;
  max-height: 2.3rem;
  float: right;

  color: #242331;
  font-family: Nunito;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 3rem */
  text-transform: capitalize;
`;

const StCheckbox = styled.input`
  display: none;
`;

const StAlert = styled.div`
  display: inline-flex;
  padding: 0.5rem 1rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 0.5rem;
  background: #fff;

  color: #797979;
  font-family: Nunito;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 3rem */
  text-transform: capitalize;
`;

const StFullScreen = styled.button`
  height: 3.6rem;
  padding: 0.5rem 1rem 0.3rem 1rem;

  border-radius: 0.5rem;
  background-color: #5236ff;
  color: #fff;

  font-family: Nunito;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 3rem */
  cursor: pointer;
`;

const StAiTutor = styled.div<{ $expanded: boolean }>`
  & > iframe {
    width: 100%;
    height: 100%;
    min-height: ${({ $expanded }) => ($expanded ? "136rem" : "68rem")};

    margin-bottom: 15rem;

    @media (max-width: 768px) {
      height: 350rem;
    }
  }
`;

const StSettingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 1.7rem;
`;

const StSettings = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;

  & > ${StCheckboxLabel} {
    cursor: pointer;
  }
`;
