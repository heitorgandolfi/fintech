import { useEffect, useState } from "react";
import { DateRange } from "../dateRange/DateRange";
import { Months } from "../monthBtnSelector/months/Months";
import { useLocation } from "react-router-dom";

export const Header = () => {
  const urlPathLocation = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setTitle("Summary");
      document.title = "Fintech | Summary";
    }

    if (location.pathname === "/sales") {
      setTitle("Sales");
      document.title = "Fintech | Sales";
    }
  }, [urlPathLocation]);

  return (
    <header className="mb">
      <div className="daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};
