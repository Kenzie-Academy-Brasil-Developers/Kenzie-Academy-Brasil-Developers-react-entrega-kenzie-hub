import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { instanceNoAuth } from "../../axios";
import { InputNormal } from "../../styles/inputs";
import { DivForm, DivInputOio, MainInputs } from "../../styles/containers";
import { ButtonEntrar, ButtonEscuro } from "../../styles/botoes";
import { ErrorMsg, MainTitle, SpanLogin } from "../../styles/text";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext } from "react";
import { OioContext } from "../../Providers/Oio/oio";
import { iResponse, UserContext } from "../../Providers/User/User";

interface iDados {
  email: string;
  password: string;
}

function LoginPage() {
  const { oio, setOio } = useContext(OioContext);
  const { setUser, setTechs } = useContext(UserContext);

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
  } = useForm<iDados>({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data: iDados) => {
    instanceNoAuth
      .post<iResponse>("/sessions", {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data)
        localStorage.setItem("@token", res.data.token);
        localStorage.setItem("@userId", res.data.user.id);
        setUser(res.data.user);
        setTechs(res.data.user.techs);
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

  return (
    <MainInputs>
      <MainTitle>KenzieHub</MainTitle>
      <DivForm>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <label htmlFor="email">Email</label>
          <InputNormal
            type="email"
            id="email"
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          <ErrorMsg>{errors.email?.message}</ErrorMsg>
          <label htmlFor="senha">Senha</label>
          <DivInputOio>
            <InputNormal
              type={oio}
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
        <ButtonEscuro>
          <Link to={"/register"}>Cadastrar</Link>
        </ButtonEscuro>
      </DivForm>
    </MainInputs>
  );
}

export default LoginPage;
