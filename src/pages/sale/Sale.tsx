import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch/useFetch";
import { OrderType } from "../../context/dataContext/DataContext";
import { formatCurrency } from "../../utils/currencyFormatter/currentFormatter";
import { LoadingIndicator } from "../../components/loadingIndicator/LoadingIndicator";

type OrderWithoutDate = Omit<OrderType, "data">;

export const SalePage = () => {
  const { saleId } = useParams();
  const { data, loading } = useFetch<OrderWithoutDate>(
    `http://data.origamid.dev/vendas/${saleId}`
  );

  if (loading) return <LoadingIndicator />;
  if (!data) return null;

  return (
    <>
      <p className="box mb">ID: {data.id}</p>
      <p className="box mb">Name: {data.nome}</p>
      <p className="box mb">Value: {formatCurrency(data.preco)}</p>
      <p className="box mb">Status: {data.status}</p>
      <p className="box mb">Payment Info: {data.pagamento}</p>
    </>
  );
};
