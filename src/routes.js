import {
  CartContainer,
  Checkout,
  Error404,
  ItemDetailContainer,
  ItemListContainer,
  Login,
} from "./components";

export const routes = [
  { path: "/", exact: true, Component: ItemListContainer },
  { path: "/cart", exact: true, Component: CartContainer },
  { path: "/checkout", exact: true, Component: Checkout },
  { path: "/login", exact: true, Component: Login },
  { path: "/products/:product", exact: true, Component: ItemListContainer },
  { path: "/product/:itemId", exact: true, Component: ItemDetailContainer },
  { path: "*", exact: false, Component: Error404 },
];
