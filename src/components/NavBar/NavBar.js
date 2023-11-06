import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { UIContext } from "../Context/UIContext";
import { FavContext } from "../Context/FavContext";
import CartWidget from "./CartWidget";
import Log from "./Log";
import { Toggler } from "./Toggler";
import Switch from "../Switch/Switch";
import { navBarConfig } from "./constants/navBarConfig";

const NavBar = ({ brand }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { darkMode } = useContext(UIContext);
  const { favorites } = useContext(FavContext);

  return (
    <header className={darkMode ? "dark-body" : ""}>
      <div className="container">
        <div className="title">
          <Link exact to="/" className={collapsed ? "display-none" : ""}>
            <h1 className={darkMode ? "dark-text" : ""}>{brand}</h1>
          </Link>

          <div className="nav-buttons">
            <Log className="log" />

            <div className="favs">
              <Link exact to="products/favoritos">
                <div className="favs-link">
                  {favorites.length ? (
                    <>
                      <span className={darkMode ? "fav dark-hover" : "fav"}>
                        {favorites.length}
                      </span>

                      <AiFillHeart className="favorite-icon nav--icon" />
                    </>
                  ) : (
                    <AiOutlineHeart className="favorite-icon nav-icon" />
                  )}
                </div>
              </Link>
            </div>

            <Switch className="switch-btn" />
          </div>

          <Toggler collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        <hr className="hr-styleLine" />

        <div className="nav-container">
          <nav>
            {navBarConfig.map((config) => (
              <NavLink
                className={darkMode ? "dark-link" : ""}
                activeClassName="active"
                {...config}
              />
            ))}
          </nav>

          <Link
            exact
            to="/cart"
            className={
              darkMode
                ? "cartWidget-container dark-hover"
                : "cartWidget-container"
            }
          >
            <CartWidget />
          </Link>
        </div>

        <hr className="hr-styleLine" />
      </div>
    </header>
  );
};

export default NavBar;
