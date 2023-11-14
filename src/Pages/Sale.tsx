import styles from "./Sale.module.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { VendaProps } from "../interfaces/VendaProps";

interface VendaPropsOmitDate extends Omit<VendaProps, "data"> {}

export const Sale = () => {
  const { id } = useParams();
  const { data } = useFetch<VendaPropsOmitDate>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (!data) return null;
  return (
    <div>
      <div className={styles.sale}>ID: {data.id}</div>
      <div className={styles.sale}>Nome: {data.nome}</div>
      <div className={styles.sale}>Preço: {data.preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</div>
      <div className={styles.sale}>Status: {data.status}</div>
      <div className={styles.sale}>Pagamento: {data.pagamento}</div>
      <div className={styles.sale}>Parcelas: {data.parcelas}</div>
    </div>
  );
};
