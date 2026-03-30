function AdminDashboard() {

  const injectProduct = () => {
    const products = JSON.parse(localStorage.getItem("products")) || [];

    const newProduct = {
      id: Date.now(),
      name: "New Injected Product",
      price: 999
    };

    products.push(newProduct);

    localStorage.setItem("products", JSON.stringify(products));

    alert("Product Added!");
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <button onClick={injectProduct}>
        Add Test Product
      </button>
    </div>
  );
}

export default AdminDashboard;