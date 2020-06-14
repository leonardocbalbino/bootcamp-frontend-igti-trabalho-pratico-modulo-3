import React, { FormEvent } from "react";

interface Props {
  salario: number;
  onSalarioChange: Function;
}

export default (props: Props) => {
  const { salario, onSalarioChange } = props;

  const handleSalarioChange = (event: FormEvent<HTMLInputElement>) => {
    onSalarioChange(event.currentTarget.value);
  };

  return (
    <div className="flex">
      <div className="input-wrapper">
        <label htmlFor="salario-bruto">Salário Bruto</label>
        <input
          type="number"
          id="salario-bruto"
          value={salario}
          onChange={handleSalarioChange}
        />
      </div>
    </div>
  );
};
