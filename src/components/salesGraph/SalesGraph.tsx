import {
  LineChart,
  XAxis,
  Tooltip,
  Line,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { OrderType } from "../../context/dataContext/DataContext";

type SalesOfTheDay = {
  data: string;
  pago: number;
  processando: number;
  falha: number;
};

function transformData(data: OrderType[]): SalesOfTheDay[] {
  const dias = data.reduce((acc: { [key: string]: SalesOfTheDay }, item) => {
    const dia = item.data.split(" ")[0];
    if (!acc[dia]) {
      acc[dia] = {
        data: dia,
        pago: 0,
        falha: 0,
        processando: 0,
      };
    }
    acc[dia][item.status] += item.preco;
    return acc;
  }, {});

  return Object.values(dias).map((dia) => ({
    ...dia,
    data: dia.data.substring(5),
  }));
}

export const SalesGraph = ({ data }: { data: OrderType[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          name="Received"
          dataKey="pago"
          stroke="#A36AF9"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          name="Processing"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          name="Failed"
          dataKey="falha"
          stroke="#000000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
