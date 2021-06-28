import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((resp) => resp.json())
      .then(setProducts);
  }, []);

  return (
    <main>
      <section className="products-container main-wrapper">
        <ul className="products-container__list">
          {/* <!-- Single item --> */}
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>
                <article className="product-item">
                  <img src={product.image} alt={product.title} />
                  <h3>{product.title}</h3>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default ProductsPage;
