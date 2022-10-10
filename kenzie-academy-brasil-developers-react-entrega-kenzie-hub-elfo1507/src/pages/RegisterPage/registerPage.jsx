import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { instance } from "../../axios";

function RegisterPage() {
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
    instance
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
    <main>
      <h1>KenzieHub</h1>
      <button type="button" onClick={proLogin}>
        Voltar
      </button>
      <div>
        <h2>Crie sua conta</h2>
        <span>Rapido e gratis. Vamos nessa</span>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" {...register("name")} />
          {errors.name?.message}
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email?.message}
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" {...register("password")} />
          {errors.password?.message}
          <label htmlFor="confSenha">Confirmar Senha</label>
          <input type="password" id="confSenha" {...register("confPass")} />
          {errors.confPass?.message}
          <label htmlFor="bio">Bio</label>
          <input type="text" id="bio" {...register("bio")} />
          {errors.bio?.message}
          <label htmlFor="contato">Contato</label>
          <input type="text" id="contato" {...register("contact")} />
          {errors.contact?.message}
          <label htmlFor="modulo">Selecionar Modulo</label>
          <select id="modulo" {...register("course_module")}>
            <option value="1modulo">Primeiro módulo</option>
            <option value="2modulo">Segundo módulo</option>
            <option value="3modulo">Terceiro módulo</option>
            <option value="4modulo">Quarto módulo</option>
            <option value="5modulo">Quinto módulo</option>
            <option value="6modulo">Sexto módulo</option>
          </select>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </main>
  );
}

export default RegisterPage;
