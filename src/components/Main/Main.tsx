import { styled } from "styled-components";

import AiTutor from "../AiTutor/AiTutor";
import BaseLayout from "../Common/BaseLayout";

const Main = () => {
  console.log("d");
  return (
    <BaseLayout headerName={"UX Design AI Tutor"}>
      <StMain>
        <AiTutor />
      </StMain>
    </BaseLayout>
  );
};

export default Main;

const StMain = styled.div`
  background: transparent;
`;
