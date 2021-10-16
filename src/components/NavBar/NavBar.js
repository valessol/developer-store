import React from "react";
import { BsBag } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import "./navBar.css";

export const NavBar = ({ brand }) => {
  return (
    <header>
      <div className="title">
        <h1>{brand}</h1>
        <BsBag className="bs-icon" />
      </div>
      <hr />
      <nav>
        <NavLink exact to="/" activeClassName="active">Todos</NavLink>
        <NavLink to="/hombre" activeClassName="active">Hombre</NavLink>
        <NavLink to="/mujer" activeClassName="active">Mujer</NavLink>
        <NavLink to="/accesorios" activeClassName="active">Accesorios</NavLink>
      </nav>
      <hr />
    </header>
  );
};
