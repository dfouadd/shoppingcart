import { toast } from "react-hot-toast";
import "../../css/products/products.css";

const Products = ({ products }) => {
  const handleItems = (product) => {
    toast.success(`${product.name} successfully added To cart`, {
      position: "top-center",
    });
  };

  return (
    <div className="products-wrapper">
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.url} alt={product.name} />
            <div className="product-desc">
              <p>{product.name}</p>
              <p>
                Price:
                <strong>{Number(product.price).toLocaleString()} EGP</strong>
              </p>
            </div>
            <button onClick={() => handleItems(product)}>add to cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
