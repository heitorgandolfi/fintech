import React from "react";
import { useFetch } from "../../hooks/useFetch/useFetch";

type DataContextType = {
  loading: boolean;
  data: OrderType[] | null;
  error: string | null;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
};

export type OrderType = {
  id: string;
  nome: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  parcelas: number | null;
  data: string;
};

const DataContext = React.createContext<DataContextType | null>(null);

export const useDataContext = () => {
  const context = React.useContext(DataContext);
  if (!context)
    throw new Error("useDataContext must be used within a DataContextProvider");
  return context;
};

const getNDaysAgo = (daysAgo: number) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const startDay = String(date.getDate()).padStart(2, "0");
  const startMonth = String(date.getMonth() + 1).padStart(2, "0");
  const startYear = date.getFullYear();
  return `${startYear}-${startMonth}-${startDay}`;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [startDate, setStartDate] = React.useState(getNDaysAgo(30));
  const [endDate, setEndDate] = React.useState(getNDaysAgo(0));

  const { loading, data, error } = useFetch<OrderType[]>(
    `https://data.origamid.dev/vendas/?inicio=${startDate}&final=${endDate}`
  );
  return (
    <DataContext.Provider
      value={{
        loading,
        data,
        error,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
