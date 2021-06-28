import Header from "./components/Header";
import { Redirect, Switch, Route } from "react-router-dom";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <>
      <Header />
      <main>
        {
          //Create your routes here
          <Switch>
            <Route exact path="/">
              <Redirect to="/products" />
            </Route>
            <Route exact path="/categories">
              <CategoriesPage />
            </Route>
            <Route exact path="/products">
              <ProductsPage />
            </Route>
            <Route path="/products/:id">
              <ProductDetailPage />
            </Route>
            {/* <Route exact path="/categories/:name">
              <BasketPage />
            </Route> */}
          </Switch>
        }
      </main>
    </>
  );
}

export default App;
