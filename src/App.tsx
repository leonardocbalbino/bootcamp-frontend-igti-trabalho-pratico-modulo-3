import React, { Component } from "react";
import DisplayCalculo from "./components/DisplayCalculo";
import Grafico from "./components/Grafico";
import InputSalario from "./components/InputSalario";
import Titulo from "./components/Titulo";
import calculoDescontoIrpf from "./utils/calculoDescontoIrpf";
import calculoDescontoInss from "./utils/calculoDescontoInss";

import "./styles.css";

interface AppState {
  salario: number;
}

export default class App extends Component<{}, AppState> {
  constructor(props: Object) {
    super(props);
    this.state = { salario: 1000 };
  }
  handleSalarioChange = (value: number) => {
    this.setState({ salario: value });
  };

  render() {
    const { salario } = this.state;
    const baseInss = salario;
    const descontoInss = calculoDescontoInss(baseInss);
    const percentualDescontoInss = descontoInss / salario;
    const baseIrpf = salario - descontoInss;
    const descontoIrpf = calculoDescontoIrpf(baseIrpf);
    const percentualDescontoIrpf = descontoIrpf / salario;
    const salarioLiquido = baseIrpf - descontoIrpf;

    return (
      <>
        <Titulo />
        <div className="container">
          <InputSalario
            salario={this.state.salario}
            onSalarioChange={this.handleSalarioChange}
          />
          <DisplayCalculo
            baseInss={baseInss}
            descontoInss={descontoInss}
            percentualDescontoInss={percentualDescontoInss}
            baseIrpf={baseIrpf}
            descontoIrpf={descontoIrpf}
            percentualDescontoIrpf={percentualDescontoIrpf}
            salarioLiquido={salarioLiquido}
          />
          <Grafico
            inss={percentualDescontoInss}
            irpf={percentualDescontoIrpf}
          />
        </div>
      </>
    );
  }
}
