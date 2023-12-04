import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

import { IcLogo } from "../../assets/icons";

interface HeaderProps {
  headerName: string;
  headerDescription?: React.ReactElement;
}

const Header = ({ headerName, headerDescription }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <StHeaderWrapper>
      <StLogo
        type="button"
        onClick={() => {
          navigate("/");
        }}
      >
        <IcLogo />
      </StLogo>
      <h1>{headerName}</h1>
      {headerDescription}
    </StHeaderWrapper>
  );
};

export default Header;

const StHeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;

  margin-bottom: 7rem;

  & > h1 {
    margin-bottom: 3rem;

    color: #242331;
    text-align: center;
    font-family: Nunito;
    font-size: 6.4rem;
    font-style: normal;
    font-weight: 800;
    line-height: 110%; /* 7.04rem */
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

const StLogo = styled.button`
  & > svg {
    float: left;
  }
`;
