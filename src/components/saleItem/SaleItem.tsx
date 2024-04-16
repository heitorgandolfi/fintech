import { NavLink } from "react-router-dom";
import { OrderType } from "../../context/dataContext/DataContext";
import { formatCurrency } from "../../utils/currencyFormatter/currentFormatter";

export const SaleItem = ({ sale }: { sale: OrderType }) => {
  return (
    <li className="sale box">
      <NavLink to={`/sales/${sale.id}`} style={{ fontFamily: "monospace" }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>{formatCurrency(sale.preco)}</div>
    </li>
  );
};
