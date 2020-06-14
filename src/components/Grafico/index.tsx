import React, { Component } from "react";
import formataPercentual from "../../utils/formataPercentual";

interface GraficoProps {
  inss: number;
  irpf: number;
}

export default class Grafico extends Component<GraficoProps> {
  render() {
    const { inss, irpf } = this.props;
    const salario = 1 - inss - irpf;
    return (
      <div className="grafico-wrapper">
        <div className="desconto-inss" style={{ width: `${inss * 100}%` }}>
          {!!inss && (
            <span className="label-grafico">{formataPercentual(inss)}</span>
          )}
        </div>
        <div className="desconto-irpf" style={{ width: `${irpf * 100}%` }}>
          {!!irpf && (
            <span className="label-grafico">{formataPercentual(irpf)}</span>
          )}
        </div>
        <div className="salario-liquido" style={{ width: `${salario * 100}%` }}>
          {!!salario && (
            <span className="label-grafico">{formataPercentual(salario)}</span>
          )}
        </div>
      </div>
    );
  }
}
