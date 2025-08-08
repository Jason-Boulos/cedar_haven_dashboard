import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    /* Light mode */
    color: #eef2ff;
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }

    /* Dark mode override */
    .dark-mode & {
      color: #eef2ff;
      background-color: #4f46e5;

      &:hover {
        background-color: #4338ca;
      }
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: #eef2ff;
    background-color: var(--color-error-500);

    &:hover {
      background-color: var(--color-error-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);

  ${(props) => {
    const size = props.size || "medium";
    return sizes[size];
  }}
  ${(props) => {
    const variation = props.variation || "primary";
    return variations[variation];
  }}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
