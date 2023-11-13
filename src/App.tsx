import { DataContextProvider } from "./Contexts/DataContext";
import "./Styles.css";

function App() {
  return (
    <DataContextProvider>
      <h1>Hello, World</h1>
    </DataContextProvider>
  );
}

export default App;
