function nameOfTheMonth(month: number) {
  const date = new Date();

  date.setMonth(date.getMonth() + month);

  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

export const MonthButton = ({ month }: { month: number }) => {
  return <button>{nameOfTheMonth(month)}</button>;
};
