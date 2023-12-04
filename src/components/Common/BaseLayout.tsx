import { styled } from "styled-components";

import Header from "./Header";

interface BaseLayoutProps {
  headerName: string;
  headerDescription?: React.ReactElement;
  children: React.ReactNode;
}

function BaseLayout({
  headerName,
  headerDescription,
  children,
}: BaseLayoutProps) {
  return (
    <StBaseLayout>
      <Header headerName={headerName} headerDescription={headerDescription} />
      <StMain>{children}</StMain>
    </StBaseLayout>
  );
}

export default BaseLayout;

const StBaseLayout = styled.main`
  height: 100dvh;

  padding: 5.6rem 26rem 0 26rem;
  background: linear-gradient(
    180deg,
    #e0dbff 0%,
    rgba(255, 255, 255, 0) 41.31%
  );
`;

const StMain = styled.div`
  width: 100%;
`;
