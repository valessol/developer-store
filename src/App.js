
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { useState } from "react";
import CartContainer from "./components/Cart/CartContainer";
import './app.scss'
import { CartProvider } from "./components/Context/CartContext";


function App() {
  const [cart, setCart] = useState([])

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar brand="DeveloperStore" icon="bi bi-bag" cart={cart} />
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
