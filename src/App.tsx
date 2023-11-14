import "./Styles.css";
import { Header } from "./Components/Header";
import { SalesSummary } from "./Pages/SalesSummary";
import { DataContextProvider } from "./Contexts/DataContext";
import { Sales } from "./Pages/Sales";
import { SideNav } from "./Components/SideNav";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <SideNav />
        <main>
          <Header />
          <SalesSummary />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
