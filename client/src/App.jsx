import { useState } from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import Filter from "./components/filter/Filter";
import data from "./data.json";
import words from "./words";

function App() {
  const [products, setProducts] = useState(data);
  console.log(products);
  return (
    <div className="layout">
      <Header />
      <main>
        <div className="wrapper">
          <Products products={products} />
          <Filter />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
