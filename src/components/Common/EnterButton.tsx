import { styled } from "styled-components";

interface EnterButtonProps {
  bgColor: string;
  textColor: string;
  handleEnter: () => void;
}

const EnterButton = ({ bgColor, textColor, handleEnter }: EnterButtonProps) => {
  return (
    <StEnterButton
      type="button"
      onClick={handleEnter}
      $bgColor={bgColor}
      $textColor={textColor}
    >
      바로가기
    </StEnterButton>
  );
};

export default EnterButton;

const StEnterButton = styled.button<{
  $bgColor: string;
  $textColor: string;
}>`
  display: flex;
  padding: 2rem 4.5rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 3.9rem;
  background: ${(props) => props.$bgColor};

  color: ${(props) => props.$textColor};
  font-family: Nunito;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
