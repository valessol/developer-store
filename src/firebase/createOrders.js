import { addDoc, collection } from "firebase/firestore";
import { getCollection, getFirestoreDB } from "./config";
import "firebase/firestore";
import Swal from "sweetalert2";
import { checkStock } from "./helpers";
import { updateStock } from "./updateStock";

export const createOrders = (client, cart, total) => {
  return new Promise(async (resolve, reject) => {
    const order = {
      buyer: client,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.selectedQuantity,
        color: item.selectedColor,
        size: item.selectedSize ? item.selectedSize : "",
        price: item.price,
      })),
      total: total * 1.21,
      date: new Date(),
    };

    try {
      const products = await getCollection("productos");
      const outOfStock = checkStock(products, cart);

      if (outOfStock.length) reject(outOfStock);

      const db = getFirestoreDB();
      const docRef = await addDoc(collection(db, "orders"), order);
      console.log("Document written with ID: ", docRef.id);
      updateStock(products, cart);
      resolve(docRef.id);
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos, ha ocurrido un error inesperado",
        text: `Por favor, intente nuevamente.(Cód. de error: ${e})`,
      });
      console.error("Error adding document: ", e);
    }
  });
};
