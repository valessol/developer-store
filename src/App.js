import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { CartProvider } from "./components/Context/CartContext";
import { AuthProvider } from "./components/Context/AuthContext";
import { Login } from "./components/Login/Login";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import Layout from "./components/Layout/Layout";
import Checkout from "./components/Checkout/Checkout";
import CartContainer from "./components/Cart/CartContainer";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Error404 from "./components/Error/Error404";
import { FavProvider } from "./components/Context/FavContext";
import "./app.scss";
import { UIProvider } from "./components/Context/UIContext";
import { ProductsProvider } from "./components/Context/ProductsContext";

function App() {
  return (
    <AuthProvider>
      <UIProvider>
        <ProductsProvider>
          <FavProvider>
            <CartProvider>
              <Layout>
                <BrowserRouter>
                  <NavBar brand="DeveloperStore" />

                  <Switch>
                    <Route exact path="/">
                      <ItemListContainer />
                    </Route>

                    <Route exact path="/cart">
                      <CartContainer />
                    </Route>

                    <Route exact path="/checkout">
                      <Checkout />
                    </Route>

                    <Route exact path="/login">
                      <Login />
                    </Route>

                    <Route exact path="/products/:product">
                      <ItemListContainer />
                    </Route>

                    <Route exact path="/product/:itemId">
                      <ItemDetailContainer />
                    </Route>

                    <Route path="*">
                      <Error404 />
                    </Route>
                  </Switch>

                  <Footer />
                </BrowserRouter>
              </Layout>
            </CartProvider>
          </FavProvider>
        </ProductsProvider>
      </UIProvider>
    </AuthProvider>
  );
}

export default App;
