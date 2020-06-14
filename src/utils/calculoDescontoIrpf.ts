export default (salario: number) => {
  const deducao = parcelaDedutivel(salario);
  switch (true) {
    case salario <= 1903.98:
      return 0;
    case salario <= 2836.65:
      return (salario * 7.5) / 100 - deducao;
    case salario <= 3701.05:
      return (salario * 15) / 100 - deducao;
    case salario <= 4664.68:
      return (salario * 22.5) / 100 - deducao;
    default:
      return (salario * 27.5) / 100 - deducao;
  }
};

const parcelaDedutivel = (salario: number) => {
  switch (true) {
    case salario <= 1903.98:
      return 0;
    case salario <= 2836.65:
      return 142.8;
    case salario <= 3701.05:
      return 354.8;
    case salario <= 4664.68:
      return 636.13;
    default:
      return 869.36;
  }
};
