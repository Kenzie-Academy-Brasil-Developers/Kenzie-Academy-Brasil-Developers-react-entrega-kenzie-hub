import styled from "styled-components";

export const ButtonEntrar = styled.button`
  color: var(--grey0);
  background-color: var(--mainColor);
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: var(--mainColorNeg);
  }
  &:focus {
    background-color: var(--mainColorFocus);
  }
`;

export const ButtonEscuro = styled.button`
  color: var(--grey0);
  background-color: var(--grey2);
  border-radius: 3px;
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
`;

export const Plus = styled.button`
  padding: 5px;
  color: var(--grey0);
  background-color: var(--grey3);
  cursor: pointer;
`;

export const Trash = styled.button`
  color: var(--grey0);
  margin: 10px;
  cursor: pointer;
`;
