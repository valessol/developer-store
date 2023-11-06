import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginFom";
import { UIContext } from "../Context/UIContext";

const Login = ({ fromCheckout }) => {
  const [isRegister, setIsRegister] = useState(true);
  const { darkMode } = useContext(UIContext);
  const { goBack, push } = useHistory();

  const handleRegister = () => setIsRegister(!isRegister);

  const handleRedirect = () => {
    if (fromCheckout) push("/checkout");
    else goBack();
  };

  return (
    <div className="cardContainer">
      {isRegister ? (
        <>
          <h2 className={darkMode ? "dark-text" : ""}>Inicia Sesión</h2>
          <LoginForm
            handleRegister={handleRegister}
            handleRedirect={handleRedirect}
          />
        </>
      ) : (
        <>
          <h2 className={darkMode ? "dark-text" : ""}>Crear cuenta</h2>
          <RegisterForm
            handleRegister={handleRegister}
            handleRedirect={handleRedirect}
          />
        </>
      )}
    </div>
  );
};

export default Login;
