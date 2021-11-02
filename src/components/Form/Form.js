import React, { useContext } from 'react';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button
} from 'antd';
import { formItemLayout, tailFormItemLayout } from './Form.Style';
import { CartContext } from '../Context/CartContext';

const { Option } = Select;

//Formulario de Ant Design

export const DataForm = () => {
    const [form] = Form.useForm();
    const { cart, totalPrice } = useContext(CartContext)
    const initialValues = {
        email: '',
        password: '',
        fullname: '',
        phone: '',
        message: '',
        gender: '',
    }

    //handleSubmit adaptada para Ant Design
    const onFinish = (formValues) => {
        console.log('Received values of form: ', formValues);
        
        const register = {...formValues}
        
        const order = {
            buyer: {
                email: register.email,
                password: register.password,
                fullName: register.fullName,
                phone: register.phone,
                message: register.message ? register.message : ''
            },
            items: cart.map((item)=>({
                id: item.id,
                name: item.name,
                quantity: item.selectedQuantity,
                color: item.selectedColor,
                size: item.selectedSize ? item.selectedSize : '',
                price: item.price
            })), 
            total: totalPrice()
        }
        console.log(order)
    };


  const prefixSelector = (
    <Form.Item 
        name="prefix" 
        noStyle
        rules={[
          {
            required: true,
            message: 'Selecciona la característica de tu país',
          },
        ]}
    >
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="0054">+54</Option>
        <Option value="0059">+59</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        ...initialValues
      }}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'El formato no es válido',
          },
          {
            required: true,
            message: 'Este campo es obligatorio',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Ingresa una contraseña',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Confirma tu contraseña',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('Las contraseñas ingresadas no coinciden'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="fullName"
        label="Nombre"
        rules={[
          {
            required: true,
            message: 'Este campo es obligatorio',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Telefono"
        rules={[
          {
            required: true,
            message: 'Este campo es obligatorio',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
        name="message"
        label="Mensaje"
      >
        <Input.TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Género"
      >
        <Select placeholder="select your gender">
          <Option value="male">Femenino</Option>
          <Option value="female">Masculino</Option>
          <Option value="other">Otro</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="legal"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Debes aceptar los Términos y Condiciones para finalizar tu compra')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Acepto los términos y condiciones
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button 
            type="primary" 
            htmlType="submit"
        >
          Finalizar
        </Button>
      </Form.Item>
    </Form>
  );
};
