import { useNavigate } from "react-router-dom";
import { ButtonEscuro } from "../../components/botoes";
import {
  ContainerDashboard,
  DivInfos,
  DivMessagemPc,
  Header,
} from "../../components/containers";
import { MainTitle, Module } from "../../components/text";

function Dashboard() {

  const {user} = useContext(UserContext)

  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <ContainerDashboard>
      <Header>
        <MainTitle>KenzieHub</MainTitle>
        <ButtonEscuro type="button" onClick={logout}>
          Voltar
        </ButtonEscuro>
      </Header>
      <main>
        <DivInfos>
          <h4>Olá {user.name}</h4>
          <Module>{user.course_module}</Module>
        </DivInfos>
        <DivMessagemPc>
          <h5>Que pena, estamos em desenvolvimento :(</h5>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </DivMessagemPc>
      </main>
    </ContainerDashboard>
  );
}

export default Dashboard;
