import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/products/${id}`)
      .then((resp) => resp.json())
      .then(setProduct);
  }, [id]);

  if ( product === null) return <h1> loading </h1>
  else 


  return (
    <section className="product-detail main-wrapper">
      <img src={product.image} alt={product.title} />
      <div className="product-detail__side" style={{ ["border-color"]: "var(--yellow"}}>
        <h3></h3>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>£{product.price}</p>
        {/* <!-- Once you click in this button, the user should be redirected to the Basket page --> */}
        <button>Add to basket</button>
      </div>
    </section>
  );
}

export default ProductDetailPage;
