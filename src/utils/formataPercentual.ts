export default (valor: number) =>
  valor.toLocaleString("pt-br", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
