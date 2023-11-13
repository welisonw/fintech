import styles from "./Months.module.css";
import { MonthButton } from "./MonthButton";

export const Months = () => {
  return (
    <div className={styles.flex}>
      <MonthButton month={-2} />
      <MonthButton month={-1} />
      <MonthButton month={0} />
    </div>
  )
}
