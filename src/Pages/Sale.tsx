import styles from "./Sale.module.css";
import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { SaleProps } from "../interfaces/SaleProps";
import { Loading } from "../Components/Loading";

interface SalePropsOmitDate extends Omit<SaleProps, "data"> {}

export const Sale = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<SalePropsOmitDate>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading) return <Loading />;
  if (!data) return null;
  return (
    <div>
      <div className={styles.sale}><strong>ID:</strong> {data.id}</div>
      <div className={styles.sale}><strong>Nome:</strong> {data.nome}</div>
      <div className={styles.sale}>
        <strong>Preço:</strong>{" "}
        {data.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className={styles.sale}><strong>Status:</strong> {data.status}</div>
      <div className={styles.sale}><strong>Pagamento:</strong> {data.pagamento}</div>
      <div className={styles.sale}><strong>Parcelas:</strong> {data.parcelas ? data.parcelas : 1}</div>
    </div>
  );
};
