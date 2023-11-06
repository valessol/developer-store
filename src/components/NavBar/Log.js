import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { UIContext } from "../Context/UIContext";

const Log = ({ className }) => {
  const { isAuth, logout } = useContext(AuthContext);
  const { darkMode } = useContext(UIContext);
  const { push } = useHistory();

  const handleLogin = () => {
    !isAuth && push("/login");
  };

  const handleLogout = () => {
    isAuth && logout();
    push("/");
  };

  return (
    <>
      <span
        className={darkMode ? `${className} dark-hover` : className}
        onClick={isAuth ? handleLogout : handleLogin}
      >
        {isAuth ? "Log Out" : "Log In"}
      </span>
    </>
  );
};

export default Log;
