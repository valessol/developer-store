import React, { useContext } from 'react';
import {
  Form,
  Input,
  Checkbox,
  Button
} from 'antd';
import { formItemLayout, tailFormItemLayout } from './Form.Style';
import { UIContext } from '../Context/UIContext';
import createUser from '../../firebase/createUser';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router';


//Formulario de Ant Design

export const NewClientForm = ({email, handleUser}) => {
    const { loader, setLoader } = useContext(UIContext)
    const { push } = useHistory()
    const [form] = Form.useForm();
    const initialValues = {
        name: '',
        phone: ''
    }

    
    //Manejo del registro si el usuario viene del Checkout previamente logueado con Google
    const onFinish = (formValues) => {
        console.log('Received values of form: ', formValues);
        const {name, phone} = formValues;

        createUser(email, name, phone)
                .then((res)=>{
                    console.log('datos de registro completados con éxito', res)
                    handleUser()
                })
                //NOTE: añadir un texto que diga lo del clg
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
            <h3>Por favor, completa el registro para finalizar la compra:</h3>

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
                    Siguiente
                </Button>
            </Form.Item>
            </Form>
        </div>
    );
};
