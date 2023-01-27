import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import { useNavigate, Link } from "react-router-dom";
import "./Admin.css";


export default function LoginAdmin() {
  const navigate = useNavigate();
  const [Username, setUsername] = useState('');
  const [Senha, setSenha] = useState('');

    function entrarAdmin(e){
      e.preventDefault();
      if (Username == "admin" && Senha == "admin") {
        navigate("/Admin")
      } else {
        alert("Usuário e senha inválidos.")
      }
  };

    
  return (
    <>
        <div class="headerAdmin">
            <h3>Área de administrador</h3>
            <ul>
                <li><Link to="/">Ir para site</Link></li>
            </ul>
        </div>
          

      <div class="central">
        <form class="CRUD">
          <h2>Login</h2>
          <div class="novoProduto">
            <label>Nome de usuário</label><br />
            <input placeholder="Nome de usuário" onChange={(e) => setUsername(e.target.value)} value={Username} required/><br />

            <label>Senha</label><br />
            <input placeholder="Senha" type="password"onChange={(e) => setSenha(e.target.value)} value={Senha} required /><br />
          </div>
          <button onClick={entrarAdmin} type="submit" class="botaoCRUD">Entrar</button>
        </form>
      </div>
    </>
  );
}
