import { styled } from "styled-components";

import { IcContact, IcQuestion, IcSuggestion } from "../../assets/icons";
import AiTutorMenu from "../AiTutor/AiTutorMenu";
import BaseLayout from "../Common/BaseLayout";
import Menu from "../Common/Menu";

const Main = () => {
  return (
    <BaseLayout
      headerName={"UX Design AI Tutor"}
      headerDescription={
        <p>
          건국대학교 UX디자인 수업 AI 튜터 (김지인 교수) AI Tutor for UX Design
          <br />
          Class at Konkuk University (Professor Jee-in Kim)
        </p>
      }
    >
      <StMain>
        <AiTutorMenu />
        <StMenuWrapper>
          <Menu
            menuIcon={<IcContact />}
            title={"교수님 연락처"}
            titleEng={"Contact"}
            description={"김지인 교수님 전화번호, 이메일, 연구실 위치"}
            bgColor="#CAC2FF"
            textColor="#5236FF"
            handleEnter={() => {}}
          />
          <Menu
            menuIcon={<IcQuestion />}
            title={"질문하기"}
            titleEng={"Question"}
            description={
              "AI 튜터를 통해 해결하지 못한 부분이 있으시면 질문을 남겨주세요."
            }
            bgColor="#FFDBE6"
            textColor="#FF6493"
            handleEnter={() => {}}
          />
          <Menu
            menuIcon={<IcSuggestion />}
            title={"의견 제안"}
            titleEng={"Suggestion"}
            description={
              "AI 튜터를 사용하시다가 발생한 문제나 제안할 의견이 있으시면 알려주세요."
            }
            bgColor="#B7EEFF"
            textColor="#33BFEB"
            handleEnter={() => {}}
          />
        </StMenuWrapper>
      </StMain>
    </BaseLayout>
  );
};

export default Main;

const StMain = styled.div`
  padding-bottom: 27rem;

  background: transparent;
`;

const StMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4.2rem;

  width: 100%;
  margin-top: 4.6rem;
`;
