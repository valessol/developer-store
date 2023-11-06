import { useContext } from "react";
import { Form, Button } from "antd";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { UIContext } from "../Context/UIContext";
import { getLoginFormButtonsConfig, getLoginFormConfig } from "./formConfig";

export const LoginForm = ({ handleRedirect, handleRegister }) => {
  const { login, googleLogin } = useContext(AuthContext);
  const { darkMode } = useContext(UIContext);

  const initialValues = {
    email: "",
    password: "",
    remember: true,
  };

  const onFinish = (values) => {
    const { email, password } = values;

    login(email, password)
      .then((res) => handleRedirect())
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Ha ocurrido un error",
          text: err.code.includes("password")
            ? "La contraseña es incorrecta"
            : "El email ingresado es incorrecto o no existe",
        });
      });
  };

  const handleGoogle = (e) => {
    e.preventDefault();

    googleLogin().then(() => {
      handleRedirect();
    });
  };

  return (
    <Form
      name="normal_login"
      className="login-form login"
      initialValues={initialValues}
      onFinish={onFinish}
    >
      {getLoginFormConfig(darkMode).map((field) => (
        <Form.Item key={field.name} {...field} />
      ))}

      <Form.Item className="login__buttons">
        <div className="card-buttons">
          {getLoginFormButtonsConfig(darkMode).map((config, index) => (
            <Button
              key={index}
              {...config}
              onClick={config.onClick && handleGoogle}
            >
              {config.text}
            </Button>
          ))}
        </div>

        <span
          className={darkMode ? "login__link dark-hover" : "login__link"}
          onClick={handleRegister}
        >
          {" "}
          No tengo cuenta
        </span>
      </Form.Item>
    </Form>
  );
};
