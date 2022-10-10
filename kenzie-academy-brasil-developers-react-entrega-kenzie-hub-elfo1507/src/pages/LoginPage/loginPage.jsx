import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { instance } from "../../axios";

function LoginPage({ setUser }) {
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
    instance
      .post("/sessions", {
        email: dados.email,
        password: dados.password,
      })
      .then((res) => {
        localStorage.setItem("@token", res.data.token);
        localStorage.setItem("@userId", res.data.user.id);
        setUser(res.data.user);
        console.log(res.data.user);
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
    <main>
      <h1>KenzieHub</h1>
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <label htmlFor="email">Email</label>
          <input type="email" name="" id="email" {...register("email")} />
          {errors.email?.message}
          <label htmlFor="senha">Senha</label>
          <input type="password" name="" id="senha" {...register("password")} />
          {errors.password?.message}
          <button type="submit">Entrar</button>
        </form>
        <span>Ainda não tem cadastro?</span>
        <button type="button" onClick={proCadastro}>
          Cadastrar
        </button>
      </div>
    </main>
  );
}

export default LoginPage;
