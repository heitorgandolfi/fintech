import { AppRoutes } from "./routes/routes";
import { DataContextProvider } from "./context/dataContext/DataContext";
import "./style.css";

function App() {
  return (
    <DataContextProvider>
      <AppRoutes />
    </DataContextProvider>
  );
}

export default App;
