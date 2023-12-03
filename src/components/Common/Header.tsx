import { styled } from "styled-components";

import { IcLeft } from "../../assets/icons";

const Header = () => {
  return (
    <StHeaderWrapper>
      <h1>건국대학교 김지인 교수님 UX디자인 강의실</h1>
    </StHeaderWrapper>
  );
};

export default Header;

const StHeaderWrapper = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 2rem 3rem;
  box-sizing: border-box;

  background-color: ${({ theme }) => theme.colors.green};

  & > h1 {
    color: ${({ theme }) => theme.colors.dark_grey_2};
    ${({ theme }) => theme.fonts.Headline};
  }
`;
