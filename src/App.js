
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import './App.css'


function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar brand="DeveloperStore" icon="bi bi-bag"/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer />
        </Route>
        <Route exact path="/:product">
          <ItemListContainer />
        </Route>
        {/* <Route exact path="/:category">
          <ItemListContainer />
        </Route> */}
        <Route exact path="/products/:id">
          <ItemDetailContainer />
        </Route>
        {/* Ruta a carrito */}
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
