import "./style.css";
import { Sales } from "./pages/sales/Sales";
import { SummaryPage } from "./pages/summary/Summary";

import { Header } from "./components/header/Header";
import { SideNav } from "./components/sideNav/SideNav";
import { DataContextProvider } from "./context/dataContext/DataContext";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <SideNav />
        <main>
          <Header />
          <SummaryPage />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
