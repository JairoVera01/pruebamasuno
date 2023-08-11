// Importa los módulos necesarios de Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA7Bs1rlMxsG3NTXdEANKNbGD9Hip-akD0",
  authDomain: "prueba-drmao.firebaseapp.com",
  projectId: "prueba-drmao",
  storageBucket: "prueba-drmao.appspot.com",
  messagingSenderId: "162060269874",
  appId: "1:162060269874:web:797eee20d46508a9e0bf2b",
  measurementId: "G-8HYM6QQ4F5",
};
// Inicializa la aplicación de Firebase con la configuración proporcionada
const app = initializeApp(firebaseConfig);

// Exporta los módulos necesarios para su uso en otros archivos
export const auth = getAuth(app); // Módulo de autenticación
export const googleProvider = new GoogleAuthProvider(); // Proveedor de autenticación de Google
export const db = getFirestore(app); // Módulo de base de datos
export const storage = getStorage(app); // Módulo de almacenamiento en la nube
