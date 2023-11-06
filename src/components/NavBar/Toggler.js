import React, { useContext } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { UIContext } from "../Context/UIContext";
import Log from "./Log";
import Switch from "../Switch/Switch";
import { menuItems } from "./constants/togglerItems";

export const Toggler = ({ collapsed, setCollapsed }) => {
  const { darkMode } = useContext(UIContext);

  const toggleCollapsed = () => setCollapsed(!collapsed);

  return (
    <nav className="nav-container-toggler">
      <div className="nav-toggler" onClick={toggleCollapsed}>
        <AiOutlineMenu className="toggler" />
      </div>

      <div className={!collapsed ? "display-none" : "nav-links"}>
        <Log className="log-collapsed" onClick={toggleCollapsed} />

        {menuItems.map((item, index) => {
          return (
            <>
              {item.separator && <div className="line"></div>}

              <Link
                key={index}
                exact
                to={item.to}
                className="log-collapsed"
                onClick={toggleCollapsed}
              >
                {item.title}
              </Link>
            </>
          );
        })}

        <div className="line"></div>

        <Switch
          className="switch-btn-collapsed"
          title={darkMode ? "Tema Claro" : "Tema Oscuro"}
          onClick={toggleCollapsed}
        />
      </div>
    </nav>
  );
};
