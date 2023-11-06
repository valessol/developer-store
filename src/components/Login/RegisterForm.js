import React, { useContext } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import Swal from "sweetalert2";
import { formItemLayout, tailFormItemLayout } from "./Form.Style";
import createUser from "../../firebase/createUser";
import { AuthContext } from "../Context/AuthContext";
import { UIContext } from "../Context/UIContext";
import { getRegisterFormConfig } from "./formConfig";

//Formulario de Ant Design

export const RegisterForm = ({ handleRedirect, handleRegister }) => {
  const { loader, setLoader, darkMode } = useContext(UIContext);
  const [form] = Form.useForm();
  const { register } = useContext(AuthContext);
  const initialValues = {
    email: "",
    password: "",
    name: "",
    phone: "",
  };

  const onFinish = async (formValues) => {
    const { email, name, phone, password } = formValues;

    setLoader(true);

    register(email, password)
      .then(() => {
        createUser(email, name, phone).then((res) =>
          console.log("createUser ok", res)
        );
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Ha ocurrido un error inesperado",
          text: err.message,
        });
      })
      .finally(() => {
        setLoader(false);
        handleRedirect();
      });
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      className={darkMode ? "register dark-register" : "register"}
      onFinish={onFinish}
      initialValues={{ ...initialValues }}
      scrollToFirstError
    >
      {getRegisterFormConfig().map((config) => (
        <Form.Item
          key={config.name}
          {...config}
          style={config.name === "legal" && tailFormItemLayout}
        />
      ))}
      <Form.Item className="login__buttons">
        <div className="card-buttons">
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
            className={
              darkMode ? "button login__btn dark-button" : "button login__btn"
            }
            disabled={loader}
          >
            Registrarme
          </Button>
        </div>
        <span
          className={darkMode ? "login__link dark-hover" : "login__link"}
          onClick={handleRegister}
        >
          Ya tengo cuenta
        </span>
      </Form.Item>
    </Form>
  );
};
