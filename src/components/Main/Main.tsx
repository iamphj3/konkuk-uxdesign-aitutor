import { styled } from "styled-components";

import BaseLayout from "../Common/BaseLayout";

const Main = () => {
  console.log("d");
  return (
    <BaseLayout headerName={"UX Design AI Tutor"}>
      <StMain>dd</StMain>
    </BaseLayout>
  );
};

export default Main;

const StMain = styled.div`
  /* margin-top: 6.4rem; */

  background: transparent;
`;
