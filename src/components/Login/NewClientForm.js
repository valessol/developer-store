import React, { useContext } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { formItemLayout, tailFormItemLayout } from './Form.Style';
import { UIContext } from '../Context/UIContext';
import createUser from '../../firebase/createUser';
import Swal from 'sweetalert2';


export const NewClientForm = ({email, handleUser}) => {
    const { loader, setLoader, darkMode } = useContext(UIContext)
    const [form] = Form.useForm();
    const initialValues = {
        name: '',
        phone: ''
    }

    
    //Manejo del registro si el usuario viene del Checkout previamente logueado con Google
    const onFinish = (formValues) => {
        const {name, phone} = formValues;

        setLoader(true)
        createUser(email, name, phone)
                .then((res)=>{
                    handleUser()
                })
                .catch((err)=>{
                    console.log(err)
                    Swal.fire({
                        icon: 'error',
                        title: 'Ha ocurrido un error inesperado',
                        text: err.message,
                    })
                })
                .finally(()=>{
                    setLoader(false)
                })
    }

    return (
        <div>
            <h3 className={darkMode ? 'dark-text cardContainer--item' : 'cardContainer--item'}>Por favor, completa el registro para finalizar la compra:</h3>
            <div  className="cardContainer--item cart--form">
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    className={darkMode ? 'register dark-register' : 'register'}
                    onFinish={onFinish}
                    initialValues={{...initialValues}}
                    scrollToFirstError
                >

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
                    <div className="card-buttons">
                        <Button 
                            type="primary" 
                            htmlType="submit"
                            shape="round"
                            className={darkMode ? 'button login__btn dark-button' : 'button login__btn'}
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
