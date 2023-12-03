import React from "react"; // Importamos la biblioteca de React
React // Importamos la biblioteca de React
import ReactDOM from "react-dom/client"; // Importamos un componente llamado ProyectoGif desde otro archivo en el mismo directorio
import { ProyectoGif } from './ProyectoGif';

import './styles.css'
// Creamos un nuevo contenedor de raíz React en el elemento con el id 'root' y renderizamos el componente ProyectoGif en él
ReactDOM.createRoot(document.getElementById("root")).render(
 //React.StrictMode es un componente especial de React que comprueba si tu aplicación tiene problemas potenciales durante el desarrollo
 <React.StrictMode>
 {/* Aquí es donde se renderiza el componente ProyectoGif */}
 <ProyectoGif />
 </React.StrictMode>
);
