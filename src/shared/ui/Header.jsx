import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../../modules/authentication/UserAvatar";

const StyledHeader = styled.header`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: space-between;
  .dark-mode & {
    background: rgba(24, 33, 47, 0.85);
    border-bottom: 1px solid var(--color-grey-700);
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    gap: 1.6rem;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-grey-800);
  margin: 0;
`;

const HeaderActions = styled.div`
  display: flex;
  gap: 2.4rem;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderTitle>The Cedar Haven</HeaderTitle>
      <HeaderActions>
        <UserAvatar />
        <HeaderMenu />
      </HeaderActions>
    </StyledHeader>
  );
}

export default Header;
