import React, { useContext } from 'react';
import {
  Form,
  Input,
  Checkbox,
  Button
} from 'antd';
import { formItemLayout, tailFormItemLayout } from './Form.Style';
import { AuthContext } from '../Context/AuthContext';
import { UIContext } from '../Context/UIContext';
import createUser from '../../firebase/createUser';
import Swal from 'sweetalert2';


//Formulario de Ant Design

export const RegisterForm = ({handleRedirect, handleRegister}) => {
    const { loader, setLoader } = useContext(UIContext)
    const [form] = Form.useForm();
    const { register, currentClient } = useContext(AuthContext)
    const initialValues = {
        email: '',
        password: '',
        name: '',
        phone: ''
        
    }



    //NOTE: si displayNone => no tengo que registrar al usuario, porque ya se registro cuando se logueo. Lo que tengo que hacer es añadirlo a la base de datos de users


    //handleSubmit adaptada para Ant Design
    const onFinish = async (formValues) => {
        console.log('Received values of form: ', formValues);
        const {email, name, phone, password} = formValues;
        
        setLoader(true)

        // //Manejo del registro si el usuario viene del Checkout previamente logueado con Google
        // if (displayNone){
        //     createUser(currentClient().email, name, phone)
        //         .then((res)=>console.log('datos de registro completados con éxito'))
        //         //NOTE: añadir un texto que diga lo del clg
        //         .catch((err)=>console.log(err))
        //         .finally(()=>{
        //             setLoader(false)

        //         })

        //     return
        // }

        register(email, password)//ok
            .then(()=> {
                createUser(email, name, phone)
                    .then((res)=>console.log('createUser ok', res))//ok
            })
            .catch((err)=> {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un error inesperado',
                    text: err.message,
                })
            })
            .finally(()=> {
                setLoader(false)
                handleRedirect();
            })

    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            className="register"
            onFinish={onFinish}
            initialValues={{...initialValues}}
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
                        message: 'La contraseña debe contener al menos 6 caracteres',
                        min: 6
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
              name="name"
              label="Nombre Completo"
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
                  style={{width: '100%',}}
            />
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
          <Form.Item className="login__buttons">
              <Button 
                  type="primary" 
                  htmlType="submit"
                  shape="round"
                  className="button login__btn"
                  disabled={loader}
              >
                  Registrarme
              </Button>
              <span className="login__link" onClick={handleRegister}>Ya tengo cuenta</span>
          </Form.Item>
        </Form>
    );
};
