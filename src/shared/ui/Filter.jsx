import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md); /* Slightly deeper shadow */
  border-radius: var(--border-radius-md); /* Slightly more rounded */
  padding: 0.5rem;
  display: flex;
  gap: 0.6rem;
  align-items: center; /* Center buttons vertically */
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: 1px solid transparent; /* Subtle outline for better hover feel */
  cursor: pointer;

  ${(props) =>
    props.$active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
      border-color: var(--color-brand-600);
    `}

  border-radius: var(--border-radius-md);
  font-weight: 500;
  font-size: 1.35rem;
  padding: 0.5rem 1rem; /* Slightly more padding */
  transition: all 0.25s ease;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-500);
    color: var(--color-brand-50);
    border-color: var(--color-brand-500);
  }

  &:disabled {
    opacity: 0.8; /* Slightly dim instead of totally locked look */
    cursor: default;
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);

    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          onClick={() => handleClick(option.value)}
          $active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
