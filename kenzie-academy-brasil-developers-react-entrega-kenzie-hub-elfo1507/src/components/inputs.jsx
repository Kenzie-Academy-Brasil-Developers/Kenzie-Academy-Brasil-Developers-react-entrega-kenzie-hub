import styled from "styled-components";

export const InputNormal = styled.input`
  background-color: var(--grey2);
  padding: 5px;
  border-radius: 3px;
  border: 1px solid transparent;
  color: white;
  margin: 10px 0;
  width: 100%;

  &:focus {
    color: white;
    background-color: var(--grey2);
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px var(--grey2) inset;
    -webkit-text-fill-color: white;
  }
`;

export const SelectForm = styled.select`
  background-color: var(--grey2);
  color: var(--grey0);
  font-size: var(--headlineSize);
  padding: 3px;
  border-radius: 3px;
  margin-top: 5px;
`;

export const OptionForm = styled.option`
  color: white;
  background-color: var(--grey2);
`;
