import { toast } from "react-hot-toast";
import { useState } from "react";
import "../../css/products/products.css";
import ProductModal from "./ProductModal";

const Products = ({ products }) => {
  const [product, setProduct] = useState("");

  const handleItems = (product) => {
    toast.success(`${product.name} successfully added To cart`, {
      position: "top-center",
    });
  };

  const openModal = (product) => {
    setProduct(product); //open Modal
  };
  const closeModal = () => {
    setProduct(false);
  };

  return (
    <div className="products-wrapper">
      <ul>
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                openModal(product);
              }}
            >
              <img src={product.url} alt={product.name} />
            </a>
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

      <ProductModal product={product} closeModal={closeModal} />
    </div>
  );
};

export default Products;
