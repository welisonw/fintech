
export function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();

  console.log(dd, mm, yyyy)

  return `${yyyy}-${mm}-${dd}`;
}
