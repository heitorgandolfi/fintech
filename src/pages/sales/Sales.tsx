import { SaleItem } from "../../components/saleItem/SaleItem";
import { useDataContext } from "../../context/dataContext/DataContext";

export const SalesPage = () => {
  const { data } = useDataContext();

  if (data === null) return null;
  return (
    <ul>
      {data.map((sale) => (
        <SaleItem key={sale.id} sale={sale} />
      ))}
    </ul>
  );
};
