import { DateInput } from "../dateInput/DateInput";
import { useDataContext } from "../../context/dataContext/DataContext";

export const DateRange = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useDataContext();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="start"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <DateInput
        label="end"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
    </form>
  );
};
