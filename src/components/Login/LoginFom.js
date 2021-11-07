import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useHistory } from 'react-router';

export const LoginForm = ({handleRegister}) => {
  const { login, googleLogin } = useContext(AuthContext)

  const initialValues = {
    email: '',
    password:'', 
    remember: true
  }

  const { push } = useHistory();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);

    const { email, password } = values;

    login(email, password)
      .then((res)=>push('/checkout'))
      .catch((err)=> console.log(err))
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    googleLogin();
    push('/checkout');

  }

  return (
    <Form
      name="normal_login"
      className="login-form login"
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        className="login__input"
        rules={[
          {
            required: true,
            message: 'Ingresa tu correo electrónico',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Ingresa tu contraseña',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Recordarme</Checkbox>
        </Form.Item>

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item className="login__buttons">
        <Button 
            type="primary" 
            htmlType="submit" 
            shape="round"
            className="button login__btn"
        >
            LogIn
        </Button>
        <Button 
            htmlType="submit" 
            shape="round"
            className="button button--secondary login__btn"
            onClick={handleGoogle}
        >
            LogIn with Google
        </Button>
        <span className="login__link" onClick={handleRegister}> No tengo cuenta</span>
      </Form.Item>
    </Form>
  );
};
