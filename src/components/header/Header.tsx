import { useState } from "react";
import { DateRange } from "../dateRange/DateRange";
import { Months } from "../monthBtnSelector/months/Months";

export const Header = () => {
  const [title, setTitle] = useState("Summary");

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
