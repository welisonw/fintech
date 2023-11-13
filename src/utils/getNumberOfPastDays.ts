
export function getNumberOfPastDays(daysPast: number) {
  const date = new Date();

  date.setDate(date.getDate() - daysPast);

  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth()).padStart(2, "0");
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`;
}
