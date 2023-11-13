import { useDataContext } from "../Contexts/DataContext";
import { formatDate } from "../utils/formatDate";
import styles from "./MonthButton.module.css";

function nameOfTheMonth(month: number) {
  const date = new Date();

  date.setMonth(date.getMonth() + month);

  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

export const MonthButton = ({ month }: { month: number }) => {
  const { setStart, setFinal } = useDataContext();

  function setMonth(month: number) {
    const date = new Date();

    date.setMonth(date.getMonth() + month);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setStart(formatDate(firstDay));
    setFinal(formatDate(lastDay));
  }

  return (
    <button onClick={() => setMonth(month)} className={styles.button}>
      {nameOfTheMonth(month)}
    </button>
  );
};
