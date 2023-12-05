import { styled } from "styled-components";

import BaseLayout from "../Common/BaseLayout";

const AiTutor = () => {
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
      <StAiTutor>
        <iframe src="https://www.chatbase.co/chatbot-iframe/3t6nItqHc-BZCQGWHrypM" />
      </StAiTutor>
    </BaseLayout>
  );
};

export default AiTutor;

const StAiTutor = styled.div`
  & > iframe {
    width: 100%;
    height: 100%;
    min-height: 70rem;

    @media (max-width: 768px) {
      height: 350rem;
    }
  }
`;
