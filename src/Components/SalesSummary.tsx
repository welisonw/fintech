import { useDataContext } from "../Contexts/DataContext";
import styles from "./SalesSummary.module.css";

export const SalesSummary = () => {
  const { data } = useDataContext();

  if (!data) return null;
  return (
    <section>
      <div className={styles.flex}>
        <div className={styles.box}>
          <h2>Valor total das Vendas</h2>
          <span>
            {data
              .reduce((accum, curr) => accum + curr.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>

        <div className={styles.box}>
          <h2>Total de Pagos</h2>
          <span>
            {data
              .filter((sale) => sale.status === "pago")
              .reduce((accum, curr) => accum + curr.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
        
        <div className={styles.box}>
          <h2>Total em Processamento</h2>
          <span>
            {data
              .filter((sale) => sale.status === "processando")
              .reduce((accum, curr) => accum + curr.preco, 0)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </span>
        </div>
      </div>
    </section>
  );
};
