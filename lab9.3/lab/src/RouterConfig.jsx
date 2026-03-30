// src/RouterConfig.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientShop from "./pages/ClientShop";
import ProductDetail from "./pages/ProductDetail";
import AdminDashboard from "./pages/AdminDashboard";

const ClientLayout = ({ children }) => (
  <div className="bg-blue-50 min-h-screen">
    <nav className="p-4 bg-blue-600 text-white flex gap-4">
      <a href="/">Home</a>
      <a href="/admin">Admin Panel</a>
    </nav>
    <div className="p-8">{children}</div>
  </div>
);

const AdminLayout = ({ children }) => (
  <div className="flex min-h-screen bg-gray-900 text-white">
    <aside className="w-64 p-6 bg-black flex flex-col gap-4">
      <a href="/admin">Dashboard</a>
      <a href="/">Back to Store</a>
    </aside>
    <div className="p-8 flex-1">{children}</div>
  </div>
);

export default function RouterConfig() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Client Section */}
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<ClientShop />} />
          {/* GAP 1: Dynamic route */}
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>

        {/* Admin Section */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
