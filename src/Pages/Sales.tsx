import styles from "./Sales.module.css";
import { SaleItem } from "../Components/SaleItem";
import { useDataContext } from "../Contexts/DataContext";

export const Sales = () => {
  const { data } = useDataContext();

  if (!data) return null;
  return (
    <ul className={styles.ul}>
      {data.map((sale) => (
        <li key={sale.id}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};
