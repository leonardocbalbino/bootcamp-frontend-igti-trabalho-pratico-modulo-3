export default (valor: number) =>
  valor.toLocaleString("pt-br", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: "currency",
    currency: "BRL"
  });
