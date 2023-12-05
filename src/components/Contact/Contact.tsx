import { styled } from "styled-components";

import { IcMail, IcOffice, IcPerson, IcPhone } from "../../assets/icons";
import BaseLayout from "../Common/BaseLayout";
import ContactInfo from "../Common/ContactInfo";

const Contact = () => {
  return (
    <BaseLayout headerName="교수님 연락처">
      <StContact>
        <StNameCard>
          <StIcPerson />
          <h2>김지인 교수</h2>
          <p>
            Professor Jee-in Kim
            <br />
            Konkuk University
          </p>
          <StTelephone>02-450-3540</StTelephone>
        </StNameCard>
        <StContactInfoWrapper>
          <ContactInfo
            icon={<StIcOffice />}
            title="Office"
            information="공학관 384-2호"
          />
          <ContactInfo
            icon={<StIcMail />}
            title="Mail"
            information="jnkm@konkuk.ac.kr"
          />
          <ContactInfo
            icon={<StIcPhone />}
            title="Phone"
            information="010-2010-3540"
          />
        </StContactInfoWrapper>
      </StContact>
    </BaseLayout>
  );
};

export default Contact;

const StContact = styled.div`
  display: flex;
  justify-content: center;
  gap: 8rem;
`;

const StNameCard = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 43.9rem;
  padding: 6.4rem 6.6rem;

  border-radius: 3rem;
  border: 1px solid #e3e3e3;
  background: #fff;
  box-shadow: 0px 17px 14px 0px rgba(217, 217, 217, 0.25);
  box-sizing: border-box;

  & > h2 {
    margin-top: 3rem;

    color: #000;
    text-align: center;
    font-family: Nunito;
    font-size: 3rem;
    font-style: normal;
    font-weight: 800;
    line-height: 110%; /* 3.3rem */
  }
  & > p {
    margin-top: 2rem;

    color: #797979;
    font-family: Nunito;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 176%;
    text-align: center;
  }
`;

const StTelephone = styled.div`
  display: flex;
  padding: 2.2rem 5rem;
  justify-content: center;
  align-items: center;

  margin-top: 3rem;

  border-radius: 3.9rem;
  background: #f5e9db;

  color: #d1934b;
  text-align: center;
  font-family: Nunito;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const StContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const StIcPerson = styled(IcPerson)`
  width: 100%;
  height: auto;
  max-width: 8.4rem;
  max-height: 8.4rem;
`;

const StIcOffice = styled(IcOffice)`
  width: 100%;
  height: auto;
  max-width: 7rem;
  max-height: 7rem;
`;

const StIcMail = styled(IcMail)`
  width: 100%;
  height: auto;
  max-width: 7rem;
  max-height: 7rem;
`;

const StIcPhone = styled(IcPhone)`
  width: 100%;
  height: auto;
  max-width: 7rem;
  max-height: 7rem;
`;
