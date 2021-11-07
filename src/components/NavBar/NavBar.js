import React from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import CartWidget from "./CartWidget";
import Logout from "./Logout";

export const NavBar = ({ brand }) => {
  
  
  return (
    <header className="container">
      <div className="title">
        <Link exact to="/">
          <h1>{brand}</h1>
        </Link>
        <Logout />
          
        <Link exact to="/cart">
          <CartWidget />
        </Link>
      </div>
      <hr />
      <nav>
        <NavLink exact to="/" activeClassName="active">Todos</NavLink>
        <NavLink exact to="/hombre" activeClassName="active">Hombre</NavLink>
        <NavLink exact to="/mujer" activeClassName="active">Mujer</NavLink>
        <NavLink exact to="/accesorios" activeClassName="active">Accesorios</NavLink>
      </nav>
      <hr />
    </header>
  );
};
