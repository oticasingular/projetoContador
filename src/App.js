import React, {Component} from "react";
import "./App.css";

class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      titulo: "Contador de clicks",
      contador: 0, 
    }
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }

  aumentar(){
    this.setState((contadorAtual) => ({
      contador : contadorAtual.contador +1,
    }));

    console.log("aumentou 1")
  }

  diminuir() {
    this.setState((contadorAtual) => ({
      contador: contadorAtual.contador -1,
    }));
    console.log("diminuiu 1")
  }

  render(){
    return (
      <div className="estilo">
        <h1 > {this.state.titulo} </h1>
        <h3> {this.state.contador} </h3>
        <div className="botoes">
          <button onClick={this.aumentar} > aumentar contador + </button>
          <button onClick={this.diminuir} > diminuir contador - </button>
        </div>
      </div>
    )
  }

}

export default App;