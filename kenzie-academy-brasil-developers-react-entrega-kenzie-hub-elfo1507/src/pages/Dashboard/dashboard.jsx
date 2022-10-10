import { useNavigate } from "react-router-dom";

function Dashboard({ user }) {
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <div>
      <header>
        <h1>KenzieHub</h1>
        <button type="button" onClick={logout}>
          Voltar
        </button>
      </header>
      <main>
        <div>
          <h4>Olá {user.name}</h4>
          <span>{user.course_module}</span>
        </div>
        <div>
          <h5>Que pena, estamos em desenvolvimento :(</h5>
          <p>
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
