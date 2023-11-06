import React, { useContext } from "react";
import Swal from "sweetalert2";
import { Form, Button } from "antd";
import { formItemLayout, tailFormItemLayout } from "./Form.Style";
import { UIContext } from "../Context/UIContext";
import createUser from "../../firebase/createUser";
import { getNewClientFormConfig } from "./formConfig";

export const NewClientForm = ({ email, handleUser }) => {
  const { loader, setLoader, darkMode } = useContext(UIContext);
  const [form] = Form.useForm();
  const initialValues = {
    name: "",
    phone: "",
  };

  //Register client if it comes from Checkout previously logged with Google
  const onFinish = (formValues) => {
    const { name, phone } = formValues;

    setLoader(true);
    createUser(email, name, phone)
      .then((res) => {
        handleUser();
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
      });
  };

  return (
    <div>
      <h3
        className={
          darkMode ? "dark-text cardContainer--item" : "cardContainer--item"
        }
      >
        Por favor, completa el registro para finalizar la compra:
      </h3>
      <div className="cardContainer--item cart--form">
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          className={darkMode ? "register dark-register" : "register"}
          onFinish={onFinish}
          initialValues={{ ...initialValues }}
          scrollToFirstError
        >
          {getNewClientFormConfig().map((config) => (
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
                  darkMode
                    ? "button login__btn dark-button"
                    : "button login__btn"
                }
                disabled={loader}
              >
                Siguiente
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
