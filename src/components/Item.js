import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  
  const producto = props.producto;

  return (
    <div id="productos">
      <img src={producto.img} alt={producto.nombre} />
      <h4>{producto.nombre}</h4>
      <h5>$ {producto.precio}</h5>
      <Link to={`/item/${producto.id}`}><button>Ver detalle</button></Link>
    </div>
  );
};

export default Item;