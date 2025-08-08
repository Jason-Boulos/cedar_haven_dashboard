import styled from "styled-components";
import { useDarkMode } from "../../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  padding: 1rem 0;
`;

const Img = styled.img`
  height: 24rem;
  width: auto;

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <StyledLogo>
      <Img src={src} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
