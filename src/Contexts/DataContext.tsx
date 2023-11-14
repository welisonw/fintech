import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { useFetch } from "../Hooks/useFetch";
import { getNumberOfPastDays } from "../utils/getNumberOfPastDays";
import { SaleProps } from "../interfaces/SaleProps";

interface DataContextProps {
  data: SaleProps[] | null;
  loading: boolean;
  error: string | null;
  start: string;
  setStart: Dispatch<SetStateAction<string>>;
  final: string;
  setFinal: Dispatch<SetStateAction<string>>;
}

const DataContext = createContext<DataContextProps | null>(null);

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const NUMBER_OF_PAST_DAYS = 30; // 30 days ago

  const [start, setStart] = useState(getNumberOfPastDays(NUMBER_OF_PAST_DAYS));
  const [final, setFinal] = useState(getNumberOfPastDays(0));

  const BASE_URL = "https://data.origamid.dev/vendas/";

  const { data, loading, error } = useFetch<SaleProps[]>(
    `${BASE_URL}?inicio=${start}&final=${final}`
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, start, setStart, final, setFinal }}
    >
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
