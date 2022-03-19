import React from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";

const Articulo = () => {
  let { modelo } = useParams();
  const [espaniol, setEspaniol] = React.useState(true);
  const [busqueda, setBusqueda] = React.useState("");
  const [producto, setProducto] = React.useState([]);

  const remover = (cadenaOrigen) => {
    console.log(cadenaOrigen);
    if (cadenaOrigen == null) {
      return "";
    } else {
      return cadenaOrigen.replaceAll("\\n", "");
    }
  };

  React.useEffect(() => {
    const obtenerDatos = async (e) => {
      if (e) {
        e.preventDefault();
      }
      try {
        const data = await db.collection("productos").doc(modelo).get();
        setProducto({ ...data.data() });
        console.log(producto);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <div>
     
    </div>
  );
};

export default Articulo;
