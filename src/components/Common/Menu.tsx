import { styled } from "styled-components";

import EnterButton from "./EnterButton";

interface MenuProps {
  menuIcon?: React.ReactElement;
  title: string;
  titleEng: string;
  description: string;
  bgColor: string;
  textColor: string;
  handleEnter: () => void;
}

const Menu = ({
  menuIcon,
  title,
  titleEng,
  description,
  bgColor,
  textColor,
  handleEnter,
}: MenuProps) => {
  return (
    <StMenuWrapper>
      <StTitle>
        {menuIcon}
        <StTitleContent>
          <h3>{title}</h3>
          <p>{titleEng}</p>
        </StTitleContent>
      </StTitle>
      <StDescription>{description}</StDescription>
      <StBtnWrapper>
        <EnterButton
          handleEnter={handleEnter}
          bgColor={bgColor}
          textColor={textColor}
        />
      </StBtnWrapper>
    </StMenuWrapper>
  );
};

export default Menu;

const StMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  height: 42.4rem;
  padding: 4.2rem 3.9rem;

  border-radius: 3rem;
  background: #f9f9f9;
  box-sizing: border-box;
`;

const StTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 2.6rem;

  margin-bottom: 2.7rem;
`;

const StTitleContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > h3 {
    color: #242331;
    font-family: Nunito;
    font-size: 3rem;
    font-style: normal;
    font-weight: 700;
    line-height: 110%; /* 3.3rem */
  }
  & > p {
    color: #797979;
    text-align: center;
    font-family: Nunito;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 157.4%; /* 3.4628rem */
  }
`;

const StDescription = styled.p`
  height: 10.2rem;

  color: #797979;
  font-family: Nunito;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 157.4%; /* 3.4628rem */
`;

const StBtnWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
`;
