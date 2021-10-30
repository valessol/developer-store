
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import CartContainer from "./components/Cart/CartContainer";
import { CartProvider } from "./components/Context/CartContext";
import './app.scss'
import { UIProvider } from "./components/Context/UIContext";


function App() {

  return (
    <UIProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar brand="DeveloperStore" />
          <Switch>
            <Route exact path="/">
              <ItemListContainer />
            </Route>
            <Route exact path="/cart">
              <CartContainer />
            </Route>
            <Route exact path="/:product">
              <ItemListContainer />
            </Route>
            <Route exact path="/products/:itemId">
              <ItemDetailContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>
    </UIProvider>
  );
}

export default App;
