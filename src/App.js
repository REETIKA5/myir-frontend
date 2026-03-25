import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import TaxOverviewPage from "./pages/TaxOverviewPage";
import TaxReturnStep1 from "./pages/TaxReturnStep1";
import TaxReturnStep2 from "./pages/TaxReturnStep2";
import UpdateProfilePage from "./pages/UpdateProfilePage";
import TaxSuccessPage from "./pages/TaxSuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/tax-overview" element={<TaxOverviewPage />} />
        <Route path="/tax-return" element={<TaxReturnStep1 />} />
        <Route path="/tax-return/review" element={<TaxReturnStep2 />} />
        <Route path="/update-profile" element={<UpdateProfilePage />} />
        <Route path="/tax-success" element={<TaxSuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;