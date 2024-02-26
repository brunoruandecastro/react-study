import React, { Component } from "react";
import "./LoginScreen.css";

class LoginScreen extends Component {
  state = {
    email: "",
    password: "",
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <div className="login-container">
        <div className="logo"></div>
        <h1>Bem vindo ao nosso Portal do Candidato</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            placeholder="Digite seu e-mail"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="Digite sua senha"
          />
          <a href="https://">Esqueceu a senha?</a>
          <button type="submit">Acessar Portal do Candidato</button>
        </form>
        <div className="register">
          <span>Ainda não possui uma conta?</span>
          <a href="https://">Crie agora</a>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
