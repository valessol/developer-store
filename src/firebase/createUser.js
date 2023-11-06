import "firebase/firestore";
import { getFirestoreDB } from "./config";
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

const createUser = (email, name, phone) => {
  return new Promise(async (resolve, reject) => {
    const user = {
      email: email.toLowerCase(),
      displayName: name,
      phoneNumber: phone,
      date: new Date(),
    };

    try {
      const db = getFirestoreDB();
      const docRef = await addDoc(collection(db, "users"), user);
      resolve(docRef.id);
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Lo sentimos, ha ocurrido un error inesperado",
        text: `Por favor, intente nuevamente.(Cód. de error: ${e})`,
      });
    }
  });
};

export default createUser;
