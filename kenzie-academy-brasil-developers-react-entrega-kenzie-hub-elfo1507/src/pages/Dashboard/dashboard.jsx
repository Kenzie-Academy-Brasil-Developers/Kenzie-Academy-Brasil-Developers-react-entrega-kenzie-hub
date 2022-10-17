import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonEscuro, Plus, Trash } from "../../styles/botoes";
import {
  ContainerDashboard,
  ContainerTech,
  ContainerTechs,
  DivCoisas,
  DivInfos,
  DivItemTech,
  DivTitle,
  Header,
} from "../../styles/containers";
import { MainTitle, TextoPqn } from "../../styles/text";
import { UserContext } from "../../Providers/User/User";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { ModalContext } from "../../Providers/Modal/Modal";
import Modal from "../Modal/Modal";
import { instanceAuth } from "../../axios";
import { toast } from "react-toastify";

function Dashboard() {
  const { modalStatus, setModal } = useContext(ModalContext);
  const { user, techs, setTechs } = useContext(UserContext);

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }
  function criarModal() {
    setModal(true);
  }

  useEffect(() => setTechs(user?.techs), [user?.techs, setTechs]);

  function deletarTech(id) {
    instanceAuth
      .delete(`/users/techs/${id}`)
      .then(() =>
        toast.success("Tecnologia deletada com sucesso", { theme: "dark" })
      )
      .catch(() =>
        toast.error("Não foi possivel deletar tecnologia, tente novamente", {
          theme: "dark",
        })
      );
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
          <h4>Olá {user?.name}</h4>
          <TextoPqn>{user?.course_module}</TextoPqn>
        </DivInfos>
        <DivCoisas>
          <DivTitle>
            <h3>Tecnologias</h3>
            <Plus type="button" onClick={criarModal}>
              <AiOutlinePlus />
            </Plus>
          </DivTitle>
          <ContainerTechs>
            {techs?.map((element, index) => {
              return (
                <ContainerTech key={index}>
                  <DivItemTech>
                    <p>{element.title}</p>
                    <TextoPqn>{element.status}</TextoPqn>
                  </DivItemTech>
                  <Trash onClick={() => deletarTech(element.id)} type="button">
                    <BsTrash />
                  </Trash>
                </ContainerTech>
              );
            })}
          </ContainerTechs>
        </DivCoisas>
      </main>
      {modalStatus && <Modal />}
    </ContainerDashboard>
  );
}

export default Dashboard;
