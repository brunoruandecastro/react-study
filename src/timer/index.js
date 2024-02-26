import React, { Component } from "react";
import "../App.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Date.now(),
    };

    this.contadorData = this.contadorData.bind(this);
  }

  //depois que o componente é montado na tela
  componentDidMount() {
    this.contadorData();
  }

  componentDidUpdate() {
    // a cada atualização dentro do componente essa função é chamada,
    // por exemplo a atualização de uma prop do construtor
  }

  componentWillUnmount() {
    clearInterval(this.intervalo);
  }

  shouldComponentUpdate() {
    // retorna true ou false se o componente atualizou
  }

  contadorData() {
    this.intervalo = setInterval(() => {
      this.setState({
        data: Date.now(),
      });
    }, 1000);
  }
  function 
  render() {
    const dataFormatada = new Date(this.state.data).toLocaleString();

    return (
      <div className="estiloContador">
        <h1 className="h1Style">Horário de Brasília</h1>
        <hr className="hrStyle"></hr>
        <h2 className="h2Style">{dataFormatada}</h2>
      </div>
    );
  }
}

export default Timer;
