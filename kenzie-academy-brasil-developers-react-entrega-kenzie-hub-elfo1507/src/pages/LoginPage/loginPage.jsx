import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { instanceNoAuth } from "../../axios";
import { InputNormal } from "../../styles/inputs";
import { DivForm, DivInputOio, MainInputs } from "../../styles/containers";
import { ButtonEntrar, ButtonEscuro } from "../../styles/botoes";
import { ErrorMsg, MainTitle, SpanLogin } from "../../styles/text";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext } from "react";
import { OioContext } from "../../Providers/Oio/oio";
import { UserContext } from "../../Providers/User/User";

function LoginPage() {
  const { oio, setOio } = useContext(OioContext);
  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup.string().required("email obrigatorio"),
    password: yup
      .string()
      .required("senha obrigatoria")
      .matches(
        /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Zaz]).*$/,
        "Senha invalida"
      ),
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
      .post("/sessions", {
        email: dados.email,
        password: dados.password,
      })
      .then((res) => {
        localStorage.setItem("@token", res.data.token);
        localStorage.setItem("@userId", res.data.user.id);
        console.log(res.data.user);
        setUser(res.data.user);
        toast.success("Login feito com sucesso", {
          theme: "dark",
        });
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao logar, tente novamente", {
          theme: "dark",
        });
      });
  };

  function proCadastro() {
    navigate("/register");
  }
  return (
    <MainInputs>
      <MainTitle>KenzieHub</MainTitle>
      <DivForm>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <label htmlFor="email">Email</label>
          <InputNormal
            type="email"
            name=""
            id="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          <ErrorMsg>{errors.email?.message}</ErrorMsg>
          <label htmlFor="senha">Senha</label>
          <DivInputOio>
            <InputNormal
              type={oio}
              name=""
              id="senha"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() =>
                oio === "password" ? setOio("text") : setOio("password")
              }
            >
              {oio === "password" ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </DivInputOio>
          <ErrorMsg>{errors.password?.message}</ErrorMsg>
          <ButtonEntrar type="submit">Entrar</ButtonEntrar>
        </form>
        <SpanLogin>Ainda não tem cadastro?</SpanLogin>
        <ButtonEscuro
          style={{ width: "100%" }}
          type="button"
          onClick={proCadastro}
        >
          Cadastrar
        </ButtonEscuro>
      </DivForm>
    </MainInputs>
  );
}

export default LoginPage;
