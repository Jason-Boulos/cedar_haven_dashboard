import styled from "styled-components";

const DashboardBox = styled.div`
  background: var(--color-grey-0);
  border: 1px solid var(--color-grey-200);
  border-radius: 0.8rem;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
  padding: 2rem 2.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }

  .dark-mode & {
    background: rgba(30, 37, 50, 0.9);
    border: 1px solid var(--color-grey-700);
  }
`;

export default DashboardBox;
