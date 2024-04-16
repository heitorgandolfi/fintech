import { NavLink } from "react-router-dom";

import { FintechSVG } from "../../assets/FintechSVG";
import salesIcon from "../../assets/icons/sales.svg";
import summaryIcon from "../../assets/icons/summary.svg";

export const SideNav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech logo" />
      <ul>
        <li>
          <i>
            <img src={summaryIcon} alt="" />
          </i>
          <NavLink to="/">Summary</NavLink>
        </li>
        <li>
          <i>
            <img src={salesIcon} alt="" />
          </i>
          <NavLink to="/sales">Sales</NavLink>
        </li>
      </ul>
    </nav>
  );
};
