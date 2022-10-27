import { Link } from "react-router-dom";
import { InputNormal, OptionForm, SelectForm } from "../../styles/inputs";
import { DivForm, Header, MainInputs } from "../../styles/containers";
import { ButtonEntrar, ButtonEscuro } from "../../styles/botoes";
import { ErrorMsg, MainTitle, SpanLogin } from "../../styles/text";
import { useContext } from "react";
import { UserContext } from "../../Providers/User/User";

function RegisterPage() {
// usar useFormContext
  const {handleSubmit, onSubmitForm, register, errors} = useContext(UserContext)

  return (
    <MainInputs>
      <Header>
        <MainTitle>KenzieHub</MainTitle>
        <ButtonEscuro type="button">
          <Link to={"/"}></Link>
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
