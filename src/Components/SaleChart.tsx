import { SaleProps } from "../interfaces/SaleProps";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { transformData } from "../utils/transformData";

export const SaleChart = ({ data }: { data: SaleProps[] }) => {
  const transformedData = transformData(data);

  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart
        data={transformedData}
        margin={{ top: 15, right: 20, left: 10, bottom: 15 }}
      >
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="pago" stroke="#A36AF9" strokeWidth={3} />
        <Line
          type="monotone"
          dataKey="processando"
          stroke="#FBCB21"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="falha"
          stroke="#f40000"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
