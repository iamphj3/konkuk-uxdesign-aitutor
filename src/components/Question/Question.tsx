import { styled } from "styled-components";

import BaseLayout from "../Common/BaseLayout";

const Question = () => {
  return (
    <BaseLayout
      headerName="질문하기"
      headerDescription={
        <p>
          UX 디자인 강의에 대한 질문을 자유롭게 입력해주세요.
          <br />
          성실하게 답변 주신 분을 선발하여 추후 리워드를 제공할 예정입니다.
        </p>
      }
    >
      <StQuestion>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd_zh0MrHhu3DE69MrOaxg71Zl0irm0dlpTh9w0Z-Z-c0lbdQ/viewform?embedded=true">
          로드 중…
        </iframe>
      </StQuestion>
    </BaseLayout>
  );
};

export default Question;

const StQuestion = styled.div`
  & > iframe {
    width: 100%;
    height: 180rem;
  }
`;
