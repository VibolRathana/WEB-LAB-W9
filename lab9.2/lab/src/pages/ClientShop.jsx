// src/pages/ClientShop.jsx
import { useState } from "react";

export default function ClientShop() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("app_products")) || []
  );

  const addNewItem = () => {
    const newItem = { id: Date.now(), name: "Headphones", price: 120 };

    // GAP 1: Create new array with spread
    const newList = [...products, newItem];

    // GAP 2: Update state and LocalStorage
    setProducts(newList);
    localStorage.setItem("app_products", JSON.stringify(newList));
  };

  return (
    <div className="p-5 bg-blue-50">
      <button onClick={addNewItem} className="bg-green-600 text-white p-2">
        + Suggest New Product
      </button>

      <ul className="mt-4">
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
