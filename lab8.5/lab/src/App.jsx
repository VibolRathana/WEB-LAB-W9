import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Toggle from "./components/Toggle";
import AsyncCounter from "./components/AsyncCounter";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Toggle</Link>
        <Link to="/async">Async Counter</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Toggle />} />
        <Route path="/async" element={<AsyncCounter />} />
      </Routes>
    </BrowserRouter>
  );
}