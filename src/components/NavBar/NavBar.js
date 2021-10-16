import React from "react";
import { BsBag } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import "./navBar.css";

export const NavBar = ({ brand }) => {
  return (
    <header>
      <div className="title">
        <Link exact to="/">
          <h1>{brand}</h1>
        </Link>
        <Link exact to="/cart">
          <BsBag className="bs-icon" />
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
