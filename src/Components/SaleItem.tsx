import { VendaProps } from "../interfaces/VendaProps";
import styles from "./SaleItem.module.css";

export const SaleItem = ({ sale }: { sale: VendaProps }) => {
  return (
    <div className={styles.sale}>
      <a href="" className={styles.link}>
        {sale.id}
      </a>
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
