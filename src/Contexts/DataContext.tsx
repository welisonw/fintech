import { PropsWithChildren, createContext, useContext } from "react";
import { useFetch } from "../Hooks/useFetch";

interface VendasProps {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: number | null;
  data: string;
}

interface DataContextProps {
  data: VendasProps[] | null;
  loading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextProps | null>(null);

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const BASE_URL = "https://data.origamid.dev/vendas/";

  const { data, loading, error } = useFetch<VendasProps[]>(BASE_URL);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);

  if (!context)
    throw new Error(
      "useDataContext precisa ser passado dentro do DataContextProvider "
    );
  return context;
};
