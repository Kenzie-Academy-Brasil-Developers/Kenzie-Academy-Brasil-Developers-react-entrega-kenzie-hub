import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { instanceAuth } from "../../axios";
import { useContext } from "react";
import { ModalContext } from "../../Providers/Modal/Modal";
import {
  DivBackground,
  DivFormModal,
  DivModal,
  FormModal,
  ModalHeader,
} from "../../styles/modal";
import { InputNormal, OptionForm, SelectForm } from "../../styles/inputs";
import { ButtonEntrar } from "../../styles/botoes";
import { TextoPqnClaro } from "../../styles/text";
import { UserContext } from "../../Providers/User/User";

interface iData {
  techName: string;
  techStatus: string;
}

function Modal() {
  const { setModal } = useContext(ModalContext);
  const { techs, setTechs } = useContext(UserContext);

  const schema = yup.object().shape({
    techName: yup.string().required("Nome obrigatorio"),
    techStatus: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iData>({
    resolver: yupResolver(schema),
  });
  const onSubmitForm = (data: iData) => {
    instanceAuth
      .post(
        "/users/techs",
        {
          title: data.techName,
          status: data.techStatus,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("@token")}`,
          },
        }
      )
      .then((res) => {
        setModal(false);
        setTechs([
          ...techs,
          { title: data.techName, status: data.techStatus, id: res.data.id },
        ]);
      });
  };
  function esconderModal() {
    setModal(false);
  }

  return (
    <DivBackground>
      <DivModal>
        <ModalHeader>
          <p>Cadastrar tecnologia</p>
          <button type="button" onClick={esconderModal}>
            x
          </button>
        </ModalHeader>
        <DivFormModal>
          <FormModal onSubmit={handleSubmit(onSubmitForm)}>
            <TextoPqnClaro htmlFor="nome">Nome</TextoPqnClaro>
            <InputNormal type="text" id="nome" {...register("techName")} />
            {errors.techName?.message}
            <TextoPqnClaro htmlFor="status">Selecionar status</TextoPqnClaro>
            <SelectForm id="status" {...register("techStatus")}>
              <OptionForm value="iniciante">Iniciante</OptionForm>
              <OptionForm value="intermediario">Intermediario</OptionForm>
              <OptionForm value="avancado">Avançado</OptionForm>
            </SelectForm>
            <ButtonEntrar type="submit">Cadastrar</ButtonEntrar>
          </FormModal>
        </DivFormModal>
      </DivModal>
    </DivBackground>
  );
}

export default Modal;
