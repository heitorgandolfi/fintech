import { MonthSelector } from "../MonthSelector";

export const Months = () => {
  return (
    <div className="flex">
      <MonthSelector monthIndex={-1} />
      <MonthSelector monthIndex={0} />
      <MonthSelector monthIndex={1} />
      <MonthSelector monthIndex={2} />
    </div>
  );
};
