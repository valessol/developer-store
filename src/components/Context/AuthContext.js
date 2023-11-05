import React, { createContext, useEffect, useState } from "react";
import { getAuthentication, provider } from "../../firebase/config";
import { getAuth, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import { useHistory } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const auth = getAuthentication();

  //Iniciar sesión
  //TODO:
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };
  // TODO:
  const logout = () => {
    return auth.signOut();
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user) {
          setIsAuth(true);
          setCurrentUser(user);
        } else setIsAuth(false);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Lo sentimos, ha ocurrido un error inesperado",
          text: `Por favor, intente nuevamente.(Cód. de error: ${error})`,
          confirmButtonText: "Aceptar",
          willClose: () => {
            history.push("/login");
          },
        });
      });
  };
  //TODO:
  //Registrarse
  const register = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  //TODO:
  //Obtener los datos del usuario
  const currentClient = () => {
    const user = getAuth().currentUser;
    if (user !== null) {
      return { email: user.email, uid: user.uid }; //ok
    }
  };

  useEffect(() => {
    currentUser ? setIsAuth(true) : setIsAuth(false);
  }, [currentUser]);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => {
      unsuscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        currentUser,
        login,
        logout,
        googleLogin,
        register,
        currentClient,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
