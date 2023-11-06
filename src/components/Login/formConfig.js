import { Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

export const getLoginFormConfig = (darkMode) => [
  {
    name: "email",
    className: "login_input",
    rules: [
      {
        required: true,
        message: "Ingresa tu correo electrónico",
      },
    ],
    children: (
      <Input
        prefix={<UserOutlined className="site-form-item-icon" />}
        placeholder="Email"
      />
    ),
  },
  {
    name: "password",
    rules: [
      {
        required: true,
        message: "Ingresa tu contraseña",
      },
    ],
    children: (
      <Input
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    ),
  },
  {
    name: "remember",
    valuePropName: "checked",
    noStyle: true,
    children: (
      <Checkbox className={darkMode ? "dark-text" : ""}>Recordarme</Checkbox>
    ),
  },
];

export const getLoginFormButtonsConfig = (darkMode) => [
  {
    type: "primary",
    htmlType: "submit",
    shape: "round",
    className: darkMode ? "button login__btn dark-button" : "button login__btn",
    text: "LogIn",
  },
  {
    shape: "round",
    className: darkMode
      ? "button button--secondary dark-button--secondary login__btn"
      : "button button--secondary login__btn",
    onClick: true,
    text: "LogIn with Google",
  },
];

export const getNewClientFormConfig = () => [
  {
    name: "name",
    label: "Nombre Completo",
    rules: [
      {
        required: true,
        message: "Este campo es obligatorio",
        whitespace: true,
      },
    ],
    children: <Input />,
  },
  {
    name: "phone",
    label: "Teléfono",
    rules: [
      {
        required: true,
        message: "Este campo es obligatorio",
      },
    ],
    children: <Input style={{ width: "100%" }} />,
  },
  {
    name: "legal",
    valuePropName: "checked",
    rules: [
      {
        validator: (_, value) =>
          value
            ? Promise.resolve()
            : Promise.reject(
                new Error(
                  "Debes aceptar los Términos y Condiciones para finalizar tu compra"
                )
              ),
      },
    ],
    children: <Checkbox>Acepto los términos y condiciones</Checkbox>,
  },
];

export const getRegisterFormConfig = () => [
  {
    name: "email",
    label: "Email",
    rules: [
      {
        type: "email",
        message: "El formato no es válido",
      },
      {
        required: true,
        message: "Este campo es obligatorio",
      },
    ],
    children: <Input />,
  },
  {
    name: "password",
    label: "Password",
    rules: [
      {
        required: true,
        message: "La contraseña debe contener al menos 6 caracteres",
        min: 6,
      },
    ],
    hasFeedback: true,
    children: <Input.Password />,
  },
  {
    name: "confirm",
    label: "Confirm Password",
    dependencies: ["password"],
    rules: [
      {
        required: true,
        message: "Confirma tu contraseña",
      },
      ({ getFieldValue }) => ({
        validator(_, value) {
          if (!value || getFieldValue("password") === value) {
            return Promise.resolve();
          }

          return Promise.reject(
            new Error("Las contraseñas ingresadas no coinciden")
          );
        },
      }),
    ],
    hasFeedback: true,
    children: <Input.Password />,
  },
  ...getNewClientFormConfig(),
];
