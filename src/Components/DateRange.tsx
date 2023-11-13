import { useDataContext } from "../Contexts/DataContext";
import { DateInput } from "./DateInput";

export const DateRange = () => {
  const { start, setStart, final, setFinal, data } = useDataContext();

  if (data) console.log(data)

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <DateInput
        type="date"
        id="start"
        label="Início"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      <DateInput
        type="date"
        id="final"
        label="Final"
        value={final}
        onChange={({ target }) => setFinal(target.value)}
      />
    </form>
  );
};
