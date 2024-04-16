import React from "react";
import { useDataContext } from "../../context/dataContext/DataContext";

const buttonStyle: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize",
  cursor: "pointer",
};

const getMonthName = (monthIndex: number) => {
  const date = new Date();
  date.setMonth(date.getMonth() + monthIndex);
  const newDate = Intl.DateTimeFormat("en-US", { month: "long" }).format(date);

  return newDate;
};

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const MonthSelector = ({ monthIndex }: { monthIndex: number }) => {
  const { setStartDate, setEndDate } = useDataContext();

  const setMonth = (monthIndex: number) => {
    const date = new Date();
    date.setMonth(date.getMonth() + monthIndex);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    setStartDate(formatDate(firstDay));

    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setEndDate(formatDate(lastDay));
  };

  return (
    <button style={buttonStyle} onClick={() => setMonth(monthIndex)}>
      {getMonthName(monthIndex)}
    </button>
  );
};
