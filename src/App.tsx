import "./Styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Components/Header";
import { SalesSummary } from "./Pages/SalesSummary";
import { DataContextProvider } from "./Contexts/DataContext";
import { Sales } from "./Pages/Sales";
import { SideNav } from "./Components/SideNav";

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <SideNav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<SalesSummary />} />
              <Route path="/sales" element={<Sales />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
