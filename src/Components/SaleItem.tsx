import { NavLink } from "react-router-dom";
import { VendaProps } from "../interfaces/VendaProps";
import styles from "./SaleItem.module.css";

export const SaleItem = ({ sale }: { sale: VendaProps }) => {
  return (
    <div className={styles.sale}>
      <NavLink to={`/sales/${sale.id}`} className={styles.link}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};
