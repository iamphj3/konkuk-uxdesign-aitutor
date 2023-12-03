import { styled } from "styled-components";

import Header from "../Common/Header";

const Main = () => {
  console.log("d");
  return (
    <StMain>
      <Header />
      메인 페이지
    </StMain>
  );
};

export default Main;

const StMain = styled.main``;
