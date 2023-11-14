import styles from "./Header.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { DateRange } from "./DateRange";
import { Months } from "./Months";

export const Header = () => {
  const [title, setTitle] = useState("Resumo");

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      setTitle("Resumo");
      document.title = "Fintech | Resumo";
    }

    if (pathname === "/sales") {
      setTitle("Vendas");
      document.title = "Fintech | Vendas";
    }
  }, [pathname]);

  return (
    <header style={{ marginBottom: "var(--gap)" }}>
      <div className={styles.daterange}>
        <DateRange />
        <h1 className={styles.h1}>{title}</h1>
      </div>
      <Months />
    </header>
  );
};
