import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import { CartProvider } from "./components/Context/CartContext";
import { AuthProvider } from "./components/Context/AuthContext";
import { FavProvider } from "./components/Context/FavContext";
import { UIProvider } from "./components/Context/UIContext";
import { ProductsProvider } from "./components/Context/ProductsContext";
import { Footer, Layout, NavBar } from "./components";
import "./app.scss";

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
                    {routes.map(({ path, exact, Component }) => (
                      <Route exact={exact} path={path}>
                        <Component />
                      </Route>
                    ))}
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
