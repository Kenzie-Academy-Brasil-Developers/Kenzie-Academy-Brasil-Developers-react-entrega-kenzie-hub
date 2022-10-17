import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instanceNoAuth } from "../../axios";
import { InputNormal, OptionForm, SelectForm } from "../../styles/inputs";
import { DivForm, Header, MainInputs } from "../../styles/containers";
import { ButtonEntrar, ButtonEscuro } from "../../styles/botoes";
import { ErrorMsg, MainTitle, SpanLogin } from "../../styles/text";

function RegisterPage({ oio, setOio }) {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatorio"),
    email: yup.string().required("email obrigatorio").email("email invalido"),
    password: yup
      .string()
      .required("senha obrigatoria")
      .matches(
        /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Zaz]).*$/,
        "Senha invalida"
      ),
    confPass: yup
      .string()
      .required("confirmar senha obrigatorio")
      .oneOf([yup.ref("password")], "senhas tem que ser iguais"),
    bio: yup.string().required("bio obrigatoria"),
    contact: yup.string().required("contato obrigatorio"),
    course_module: yup.string().required("modulo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (dados) => {
    instanceNoAuth
      .post("/users", {
        name: dados.name,
        email: dados.email,
        password: dados.password,
        bio: dados.bio,
        contact: dados.contact,
        course_module: dados.course_module,
      })
      .then((res) => {
        toast.success("Cadastro realizado com sucesso!", { theme: "dark" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao cadastrar, favor tentar novamente", {
          theme: "dark",
        });
      });
  };
  function proLogin() {
    navigate("/");
  }
  return (
    <MainInputs>
      <Header>
        <MainTitle>KenzieHub</MainTitle>
        <ButtonEscuro type="button" onClick={proLogin}>
          Voltar
        </ButtonEscuro>
      </Header>
      <DivForm>
        <h2>Crie sua conta</h2>
        <SpanLogin>Rapido e gratis. Vamos nessa</SpanLogin>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <label htmlFor="nome">Nome</label>
          <InputNormal
            type="text"
            id="nome"
            placeholder="Digite seu nome"
            {...register("name")}
          />
          <ErrorMsg>{errors.name?.message}</ErrorMsg>
          <label htmlFor="email">Email</label>
          <InputNormal
            type="email"
            id="email"
            placeholder="Digite um e-mail valido"
            {...register("email")}
          />
          <ErrorMsg>{errors.email?.message}</ErrorMsg>
          <label htmlFor="senha">Senha</label>
          <InputNormal
            type="password"
            id="senha"
            placeholder="Digite uma senha boa"
            {...register("password")}
          />
          <ErrorMsg>{errors.password?.message}</ErrorMsg>
          <label htmlFor="confSenha">Confirmar Senha</label>
          <InputNormal
            type="password"
            id="confSenha"
            placeholder="Confirme sua senha"
            {...register("confPass")}
          />
          <ErrorMsg>{errors.confPass?.message}</ErrorMsg>
          <label htmlFor="bio">Bio</label>
          <InputNormal
            type="text"
            id="bio"
            placeholder="Fale sobre você"
            {...register("bio")}
          />
          <ErrorMsg>{errors.bio?.message}</ErrorMsg>
          <label htmlFor="contato">Contato</label>
          <InputNormal
            type="text"
            id="contato"
            placeholder="Digite um meio de contato"
            {...register("contact")}
          />
          <ErrorMsg>{errors.contact?.message}</ErrorMsg>
          <label htmlFor="modulo">Selecionar Modulo</label>
          <SelectForm id="modulo" {...register("course_module")}>
            <OptionForm value="1modulo">Primeiro módulo</OptionForm>
            <OptionForm value="2modulo">Segundo módulo</OptionForm>
            <OptionForm value="3modulo">Terceiro módulo</OptionForm>
            <OptionForm value="4modulo">Quarto módulo</OptionForm>
            <OptionForm value="5modulo">Quinto módulo</OptionForm>
            <OptionForm value="6modulo">Sexto módulo</OptionForm>
          </SelectForm>
          <ButtonEntrar type="submit">Cadastrar</ButtonEntrar>
        </form>
      </DivForm>
    </MainInputs>
  );
}

export default RegisterPage;
