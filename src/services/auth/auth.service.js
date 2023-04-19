import axios from "axios";
import { useUrlStore } from "@/stores/url";
// import { useAuthStore } from "@/stores/authStore";

const store = useUrlStore();
// const authStore = useAuthStore();

const { hostname } = window.location;

let API_URL = "";

if (hostname.includes("localhost")) {
  API_URL = `${store.urlApiDev}/login/`;
} else if (hostname.includes("dev")) {
  API_URL = `${store.urlApiDev}/login/`;
} else {
  API_URL = `${store.urlApiDev}/login/`;
}

class AuthService {
  login(username, password) {
    return axios.post(API_URL, { username: username, password: password });
  }
}

export default new AuthService();

// export function login(username, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Simula la verificación del usuario y contraseña
//       if (username === "usuario" && password === "contrasena") {
//         const token = "TOKEN_DE_PRUEBA"; // Reemplaza con la lógica para obtener el token real desde el servidor
//         resolve(token);
//       } else {
//         reject(new Error("Credenciales inválidas"));
//       }
//     }, 1000); // Simula un retardo en la respuesta del servidor
//   });
// }

// // Verifica si el usuario tiene un token de autenticación válido
// export function isAuthenticated() {
//   const token = localStorage.getItem("token"); // Reemplaza con la lógica para obtener el token almacenado en tu aplicación
//   return token !== null;
// }

// // Elimina el token de autenticación
// export function logout() {
//   localStorage.removeItem("token"); // Reemplaza con la lógica para eliminar el token de autenticación almacenado en tu aplicación
// }
