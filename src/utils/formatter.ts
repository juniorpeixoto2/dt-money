export const dateFormatter = Intl.DateTimeFormat("pt-BR", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  //   second: "numeric",
  hour12: false,
});

export const priceFormatter = Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});
