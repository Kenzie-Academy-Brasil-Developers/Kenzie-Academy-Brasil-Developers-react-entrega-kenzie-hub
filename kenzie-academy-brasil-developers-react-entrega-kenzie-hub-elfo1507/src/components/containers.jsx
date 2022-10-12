import styled from "styled-components";

export const MainInputs = styled.main`
  background-color: var(--grey4);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: var(--grey0);
  padding: 10px;
  min-height: 100vh;
`;

export const ContainerDashboard = styled.div`
  background-color: var(--grey4);
  color: var(--grey0);
  padding: 10px;
  min-height: 100vh;
`;

export const DivForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--grey3);
  padding: 10px;
  border-radius: 3px;
  width: 100%;
  height: 70%;
  & > form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  & > form > label {
    margin-top: 5px;
    font-size: var(--headlineSize);
  }

  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const Header = styled.header`
  display: flex;
  width: 100%;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: space-around;
    width: 100%;
  }
`;

export const DivInputOio = styled.div`
  display: flex;
  background-color: var(--grey2);
  height: 30px;
  padding: 0 5px;

  button {
    color: white;
  }
`;

export const DivInfos = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-top: 1px solid var(--grey3);
  border-bottom: 1px solid var(--grey3);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
`;

export const DivMessagemPc = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 240px;
    margin-top: 10px;
  }
`;
