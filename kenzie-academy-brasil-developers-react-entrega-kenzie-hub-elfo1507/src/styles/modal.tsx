import styled from "styled-components";

export const DivBackground = styled.div`
  background-color: #0d0e0ecc;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export const DivModal = styled.div`
  height: 50%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const ModalHeader = styled.header`
  background-color: var(--grey2);
  color: var(--grey0);
  display: flex;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;

  & > button {
    color: var(--grey0);
  }
`;

export const FormModal = styled.form`
  background-color: var(--grey3);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DivFormModal = styled.div`
  background-color: var(--grey3);
  padding: 10px;
  width: 100%;
`;
