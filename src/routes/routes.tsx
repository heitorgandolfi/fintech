import { BrowserRouter, Route, Routes } from "react-router-dom";

import { SalePage } from "../pages/sale/Sale";
import { SalesPage } from "../pages/sales/Sales";
import { SummaryPage } from "../pages/summary/Summary";

import { SideNav } from "../components/sideNav/SideNav";
import { Header } from "../components/header/Header";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <SideNav />
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<SummaryPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/sales/:saleId" element={<SalePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};
