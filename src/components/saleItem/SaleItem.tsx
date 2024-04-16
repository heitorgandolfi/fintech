import { OrderType } from "../../context/dataContext/DataContext";

export const SaleItem = ({ sale }: { sale: OrderType }) => {
  return (
    <li className="sale box">
      <a href="" style={{ fontFamily: "monospace" }}>
        {sale.id}
      </a>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
    </li>
  );
};
