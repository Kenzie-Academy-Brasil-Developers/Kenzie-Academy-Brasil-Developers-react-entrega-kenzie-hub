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

function Modal() {
  const { setModal } = useContext(ModalContext);

  const schema = yup.object().shape({
    techName: yup.string().required("Nome obrigatorio"),
    techStatus: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitForm = (data) => {
    instanceAuth.post("/users/techs", {
      title: data.techName,
      status: data.techStatus,
    });
    setModal(false);
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
            <SelectForm name="" id="status" {...register("techStatus")}>
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
