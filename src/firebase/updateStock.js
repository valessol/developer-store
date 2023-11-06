import { doc, updateDoc } from "firebase/firestore";
import { getFirestoreDB } from "./config";
import "firebase/firestore";

export const updateStock = (products, cart) => {
  try {
    const db = getFirestoreDB();
    cart.forEach((item) => {
      const productRef = doc(db, "productos", item.id);
      updateDoc(productRef, {
        stock: cart.selectedQuantity,
      });
    });
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};
