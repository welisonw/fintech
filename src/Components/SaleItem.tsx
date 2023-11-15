import { NavLink } from "react-router-dom";
import { SaleProps } from "../interfaces/SaleProps";
import styles from "./SaleItem.module.css";

export const SaleItem = ({ sale }: { sale: SaleProps }) => {
  return (
    <NavLink to={`/sales/${sale.id}`} className={styles.sale}>
      <div>{sale.id}</div>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </NavLink>
  );
};
