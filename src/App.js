
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import CartContainer from "./components/Cart/CartContainer";
import { CartProvider } from "./components/Context/CartContext";
import './app.scss'


function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar brand="DeveloperStore" icon="bi bi-bag" />
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
          <Route exact path="/products/:id">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
