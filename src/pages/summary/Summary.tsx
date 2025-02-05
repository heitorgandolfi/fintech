import { LoadingIndicator } from "../../components/loadingIndicator/LoadingIndicator";
import { SalesGraph } from "../../components/salesGraph/SalesGraph";
import {
  OrderType,
  useDataContext,
} from "../../context/dataContext/DataContext";

export const SummaryPage = () => {
  const { data, loading } = useDataContext();

  const amountRender = (data: OrderType[], status: string) => {
    return data
      .filter((i) => i.status === status)
      .reduce((acc, item) => acc + item.preco, 0)
      .toLocaleString("en-US", { style: "currency", currency: "USD" });
  };

  if (loading) return <LoadingIndicator />;
  if (data === null) return null;

  return (
    <section>
      <div className="summary flex mb">
        <div className="box">
          <h2>Sales</h2>
          <span>{amountRender(data, "falha")}</span>
        </div>

        <div className="box">
          <h2>Received</h2>
          <span>{amountRender(data, "pago")}</span>
        </div>

        <div className="box">
          <h2>Processing</h2>
          <span>{amountRender(data, "processando")}</span>
        </div>
      </div>

      <div className="box">
        <SalesGraph data={data} />
      </div>
    </section>
  );
};
