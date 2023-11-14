import { Header } from "./Components/Header";
import { SalesSummary } from "./Pages/SalesSummary";
import { DataContextProvider } from "./Contexts/DataContext";
import "./Styles.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <h1>Hello, World</h1>
        <Header />
        <SalesSummary />
      </div>
    </DataContextProvider>
  );
}

export default App;
