import { styled } from "styled-components";

interface EnterButtonProps {
  icon: React.ReactElement;
  title: string;
  information: string;
}

const ContactInfo = ({ icon, title, information }: EnterButtonProps) => {
  return (
    <StContactInfo>
      <StTitle>
        {icon}
        <h3>{title}</h3>
      </StTitle>
      <p>{information}</p>
    </StContactInfo>
  );
};

export default ContactInfo;

const StContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 58.3rem;
  padding: 3.4rem 3.8rem;

  border-radius: 4rem;
  border: 1px solid #e8e8e8;
  background: #fff;
  box-shadow: 0px 24px 33px 0px rgba(181, 181, 181, 0.25);
  box-sizing: border-box;

  & > p {
    color: #797979;
    text-align: right;
    font-family: Nunito;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 157.4%; /* 3.4628rem */
    text-transform: lowercase;
  }
`;

const StTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & > h3 {
    color: #1b2534;
    font-family: Nunito;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 700;
    line-height: 321.5%; /* 7.073rem */
    text-transform: capitalize;
  }
`;
