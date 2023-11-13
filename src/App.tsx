import { Header } from "./Components/Header";
import { DataContextProvider } from "./Contexts/DataContext";
import "./Styles.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <h1>Hello, World</h1>
        <Header />
      </div>
    </DataContextProvider>
  );
}

export default App;
