import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function CategoriesPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/categories")
      .then((response) => response.json())
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <main>
      <section className="categories-container main-wrapper">
        <ul className="categories-container__list">
          {categories.map((category) => (
            <li>
              <Link
                to={`/categories/${category.name}`}
                style={{ ["--random-colour"]: "var(--yellow)" }}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default CategoriesPage;
