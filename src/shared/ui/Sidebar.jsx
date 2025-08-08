import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../../data/Uploader";

const StyledSidebar = styled.aside`
  background: linear-gradient(
    135deg,
    var(--color-brand-600) 0%,
    var(--color-brand-700) 100%
  );
  padding: 2.4rem 1.6rem;
  border-right: 1px solid var(--color-grey-100);
  position: relative;
  overflow: hidden;

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/><circle cx="10" cy="60" r="0.5" fill="white" opacity="0.1"/><circle cx="90" cy="40" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1.6rem 1rem;
    gap: 1.6rem;
  }
`;

const SidebarContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  height: 100%;
`;

const SidebarFooter = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarContent>
        <Logo />
        <MainNav />
        <SidebarFooter>
          <Uploader />
        </SidebarFooter>
      </SidebarContent>
    </StyledSidebar>
  );
}

export default Sidebar;
