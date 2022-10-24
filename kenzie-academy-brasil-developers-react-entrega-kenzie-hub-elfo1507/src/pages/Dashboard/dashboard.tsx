import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
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

  function logout() {
    localStorage.clear();
  }
  function criarModal() {
    setModal(true);
  }
  function deletarTech(id: string) {
    instanceAuth
      .delete(`/users/techs/${id}`)
      .then(() => {
        toast.success("Tecnologia deletada com sucesso", { theme: "dark" });
        setTechs(techs.filter((element) => element.id !== id));
      })
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
          <Link to={"/"}></Link>
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
