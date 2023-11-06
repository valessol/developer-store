import React, { useCallback, useContext, useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router";
import { Button, Spin } from "antd";
import Swal from "sweetalert2";
import { getCollection } from "../../firebase/config";
import { createOrders } from "../../firebase/createOrders";
import { CartContext } from "../Context/CartContext";
import { UIContext } from "../Context/UIContext";
import { AuthContext } from "../Context/AuthContext";
import { NewClientForm } from "../Login/NewClientForm";
import OrderResume from "./OrderResume";
import ClientResume from "./ClientResume";
import Login from "../Login/Login";

const Checkout = () => {
  const { cart, totalPrice, cleanCart } = useContext(CartContext);
  const { loader, setLoader, darkMode } = useContext(UIContext);
  const { isAuth, currentClient } = useContext(AuthContext);
  const [actualClient, setActualClient] = useState(null);
  const { push } = useHistory();

  //Obtener datos de usaurio
  const client = currentClient();

  //Manejo de la inf. del usuario segun se haya logueado con google o haya llenado todos sus datos en el registro
  const handleUser = useCallback(() => {
    if (isAuth) {
      setLoader(true);

      getCollection("users").then((users) => {
        const newClient = users.find((user) => user.email === client.email);
        setActualClient(newClient);
      });
      setLoader(false);
    }
  }, [isAuth, client, setLoader]);

  //Obtener información del cliente
  useEffect(() => {
    handleUser();
  }, [isAuth, handleUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    //Generar orden de compra
    createOrders(client, cart, totalPrice())
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "¡Su orden se ha registrado con éxito!",
          text: `El código de orden es ${res}`,
          willClose: () => {
            cleanCart();
            push("/");
          },
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Los siguientes items ya no están en stock:",
          text: err.map((e) => e.name).join(", "),
          confirmButtonText: "Modificar Carrito",
          willClose: () => {
            push("/cart");
          },
        });
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <>
      {cart.length === 0 && <Redirect to="/" />}

      {loader ? (
        <Spin />
      ) : !isAuth ? (
        <Login fromCheckout={true} />
      ) : (
        <div className="cardContainer">
          <h2 className={darkMode ? "dark-text" : ""}>Resumen de compra</h2>
          {actualClient ? (
            <>
              <div className="cart__checkout cardContainer--item">
                <OrderResume cart={cart} total={totalPrice()} />
                <ClientResume client={client} actualClient={actualClient} />
              </div>

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
                  onClick={handleSubmit}
                >
                  Finalizar compra
                </Button>
              </div>
            </>
          ) : (
            <NewClientForm email={client.email} handleUser={handleUser} />
          )}
        </div>
      )}
    </>
  );
};

export default Checkout;
