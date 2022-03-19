import React from "react";
import { db } from "../firebase";


import { Link } from "react-router-dom";
import Articulo from "./Articulo";
//import "./css/bootstrap.min.css";
/*import "./css/slick.css";
import "./css/slick-theme.css";
import "./css/nouislider.min.css";
import "./css/style.css";*/
//import "./css/font-awesome.min.css";

const Store = () => {
  const [busqueda, setBusqueda] = React.useState("");
  const [productos, setProductos] = React.useState([]);
  const [espaniol, setEspaniol] = React.useState(true);
  const filtro = (item) => {
    console.log(item);
    if (item.modelo) {
      return item.modelo.toLowerCase().includes(busqueda.toLocaleLowerCase());
    } else {
      return false;
    }
  };
  const obtenerDatos = async (e) => {
    if (e) {
      e.preventDefault();
    }
    try {
      const data = await db.collection("productos").get();
      const arrayData = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(arrayData);
      if (arrayData) {
        const filtrado = arrayData.filter(filtro);
        setProductos(filtrado);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div>
      
    </div>
  );
};

export default Store;
