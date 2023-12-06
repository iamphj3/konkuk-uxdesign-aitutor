import { useState } from 'react';
import { styled } from 'styled-components';

import { IcCheckAfter, IcCheckBefore } from '../../assets/icons';
import BaseLayout from '../Common/BaseLayout';

const AiTutor = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleHeight = () => {
    setExpanded(!expanded);
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
        <StCheckboxLabel>
          {expanded ? <StIcCheckAfter /> : <StIcCheckBefore />}
          채팅창 길이 늘리기
          <StCheckbox
            type="checkbox"
            checked={expanded}
            onChange={toggleHeight}
          />
        </StCheckboxLabel>
        <iframe src="https://www.chatbase.co/chatbot-iframe/3t6nItqHc-BZCQGWHrypM" />
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
  margin-bottom: 1.7rem;
  float: right;

  color: #242331;
  font-family: Open Sans;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 3rem */
  text-transform: capitalize;
`;

const StCheckbox = styled.input`
  display: none;
`;

const StAiTutor = styled.div<{ $expanded: boolean }>`
  & > ${StCheckboxLabel} {
    cursor: pointer;
  }
  & > iframe {
    width: 100%;
    height: 100%;
    /* min-height: 68rem; */
    min-height: ${({ $expanded }) => ($expanded ? "136rem" : "68rem")};

    @media (max-width: 768px) {
      height: 350rem;
    }
  }
`;
