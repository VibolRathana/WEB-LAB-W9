import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const products = JSON.parse(localStorage.getItem("products")) || [];

  // Find product by ID
  const product = products.find(p => p.id == id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <h2>Product Detail</h2>

      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>ID: {product.id}</p>
    </div>
  );
}

export default ProductDetail;