import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import CartContainer from "./components/Cart/CartContainer";
import { CartProvider } from "./components/Context/CartContext";
import { UIContext } from "./components/Context/UIContext";
import Checkout from "./components/Checkout/Checkout";
import { AuthProvider } from "./components/Context/AuthContext";
import { Login } from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import Error404 from "./components/Error404/Error404";
import './app.scss'


function App() {
    const { darkMode } = useContext(UIContext)

    return (
        <AuthProvider>
                <CartProvider>
                    <div 
                        className={darkMode ? 'dark-body' : ''} 
                        style={{minHeight: '100vh', display: "flex", flexDirection: "column"}}>

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

                            <Footer/>

                        </BrowserRouter>

                    </div>
                </CartProvider>
        </AuthProvider>
    );
}

export default App;
