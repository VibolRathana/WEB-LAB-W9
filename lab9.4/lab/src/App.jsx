import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientShop from "./pages/ClientShop";
import ProductDetail from "./pages/ProductDetail";
import AdminDashboard from "./pages/AdminDashboard";
import { useEffect } from "react";
import data from "./data";

function App() {

  useEffect(() => {
    const stored = localStorage.getItem("products");
    if (!stored) {
      localStorage.setItem("products", JSON.stringify(data));
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientShop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;