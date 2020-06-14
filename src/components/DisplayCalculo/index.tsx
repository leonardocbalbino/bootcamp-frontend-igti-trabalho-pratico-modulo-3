import React from "react";
import formataNumero from "../../utils/formataNumero";
import formataPercentual from "../../utils/formataPercentual";

interface Props {
  baseInss: number;
  descontoInss: number;
  percentualDescontoInss: number;
  baseIrpf: number;
  descontoIrpf: number;
  percentualDescontoIrpf: number;
  salarioLiquido: number;
}

export default (props: Props) => {
  const {
    baseInss,
    descontoInss,
    percentualDescontoInss,
    baseIrpf,
    descontoIrpf,
    percentualDescontoIrpf,
    salarioLiquido
  } = props;
  return (
    <>
      <div className="flex wrap">
        <div className="input-wrapper flex-1">
          <label htmlFor="base-inss">Base INSS</label>
          <input
            type="text"
            value={formataNumero(baseInss)}
            disabled
            id="base-inss"
          />
        </div>
        <div className="input-wrapper flex-1">
          <label htmlFor="desconto-inss" className="texto-desconto-inss">
            Desconto INSS
          </label>
          <input
            type="text"
            id="desconto-inss"
            value={`${formataNumero(descontoInss)} (${formataPercentual(
              percentualDescontoInss
            )})`}
            disabled
            className="texto-desconto-inss"
          />
        </div>
        <div className="input-wrapper flex-1">
          <label htmlFor="base-irpf">Base IRPF</label>
          <input
            type="text"
            value={formataNumero(baseIrpf)}
            disabled
            id="base-irpf"
          />
        </div>
        <div className="input-wrapper flex-1">
          <label htmlFor="desconto-irpf" className="texto-desconto-irpf">
            Desconto IRPF
          </label>
          <input
            type="text"
            value={`${formataNumero(descontoIrpf)} (${formataPercentual(
              percentualDescontoIrpf
            )})`}
            disabled
            id="desconto-irpf"
            className="texto-desconto-irpf"
          />
        </div>
      </div>
      <div className="flex">
        <div className="input-wrapper">
          <label htmlFor="salario-liquido" className="texto-salario-liquido">
            Salário Líquido
          </label>
          <input
            type="text"
            value={formataNumero(salarioLiquido)}
            disabled
            id="salario-liquido"
            className="texto-salario-liquido"
          />
        </div>
      </div>
    </>
  );
};
