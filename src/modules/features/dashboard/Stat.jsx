import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.9; }
`;

const StyledStat = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border: 1px solid var(--color-${(props) => props.color}-300);
  border-radius: 1.2rem;
  padding: 1.8rem;
  display: grid;
  grid-template-columns: 7rem 1fr;
  grid-template-rows: auto auto;
  column-gap: 1.8rem;
  row-gap: 0.6rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.35s ease;

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow:
      0 12px 28px rgba(0, 0, 0, 0.12),
      0 0 12px var(--color-${(props) => props.color}-400);
  }

  /* Dark mode support */
  .dark-mode & {
    background: rgba(18, 24, 38, 0.65);
    border-color: var(--color-${(props) => props.color}-700);
  }
`;

const Icon = styled.div`
  grid-row: 1 / -1;
  aspect-ratio: 1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    145deg,
    var(--color-${(props) => props.color}-200),
    var(--color-${(props) => props.color}-400)
  );
  box-shadow: 0 4px 12px var(--color-${(props) => props.color}-300);
  animation: ${pulse} 3s ease-in-out infinite;

  & svg {
    width: 3.4rem;
    height: 3.4rem;
    color: var(--color-${(props) => props.color}-800);
    transition: transform 0.3s ease;
  }

  ${StyledStat}:hover & svg {
    transform: scale(1.15);
  }
`;

const Title = styled.h5`
  align-self: end;
  font-size: 1.3rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
  opacity: 0.75;
`;

const Value = styled.p`
  font-size: 2.8rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.5px;
`;

function Stat({ icon, title, value, color }) {
  return (
    <StyledStat color={color}>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}

export default Stat;
