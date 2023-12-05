import { styled } from "styled-components";

import BaseLayout from "../Common/BaseLayout";

const Suggestion = () => {
  return (
    <BaseLayout
      headerName="제안하기"
      headerDescription={
        <p>
          AI 튜터를 사용하시다가 발생한 문제나 제안할 의견이 있으시면
          알려주세요.
          <br />
          서비스를 지속적으로 개선하는 데 큰 도움이 됩니다.
        </p>
      }
    >
      <StSuggestion>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdT2yDOmf4VL-cRQAe1Jv8QEDqBrXZpavD5nvxoBuF3ohQmRw/viewform?embedded=true">
          로드 중…
        </iframe>
      </StSuggestion>
    </BaseLayout>
  );
};

export default Suggestion;

const StSuggestion = styled.div`
  & > iframe {
    width: 100%;
    height: 100rem;

    @media (max-width: 768px) {
      height: 550rem;
    }
  }
`;
