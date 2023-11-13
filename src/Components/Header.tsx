import { DateRange } from "./DateRange";
import { Months } from "./Months";

export const Header = () => {
  return (
    <header style={{ marginBottom: "var(--gap)" }}>
      <div style={{ marginBottom: "var(--gap)" }}>
        <DateRange />
      </div>
      <Months />
    </header>
  );
};
