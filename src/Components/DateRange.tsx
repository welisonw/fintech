import { useState } from "react";
import { DateInput } from "./DateInput";

export const DateRange = () => {
  const [start, setStart] = useState("");
  const [final, setFinal] = useState("");

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
