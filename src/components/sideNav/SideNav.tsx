import summaryIcon from "../../assets/icons/summary.svg";
import salesIcon from "../../assets/icons/sales.svg";
import { FintechSVG } from "../../assets/FintechSVG";

export const SideNav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech logo" />
      <ul>
        <li>
          <i>
            <img src={summaryIcon} alt="" />
          </i>
          <a href="">Summary</a>
        </li>
        <li>
          <i>
            <img src={salesIcon} alt="" />
          </i>
          <a href="">Sales</a>
        </li>
      </ul>
    </nav>
  );
};
