import "./Styles.css";
import { Header } from "./Components/Header";
import { SalesSummary } from "./Pages/SalesSummary";
import { DataContextProvider } from "./Contexts/DataContext";
import { Sales } from "./Pages/Sales";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <h1>Hello, World</h1>
        <Header />
        <SalesSummary />
        <Sales />
      </div>
    </DataContextProvider>
  );
}

export default App;
