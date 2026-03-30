import { Link } from "react-router-dom";

function ProductList() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  return (
    <div>
      <h2>Product List</h2>

      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>

          {/* Navigate to detail page */}
          <Link to={`/product/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;