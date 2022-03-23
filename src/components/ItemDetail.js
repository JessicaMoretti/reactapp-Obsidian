import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const ItemDetail = (props) => {
  const item = props.itemProductos;

  const onAdd = (unidades) => {
  setconfCompra(false)
  console.log("Productos agregados al carrito")
  console.log(unidades)
  };

  const [confCompra, setconfCompra] =useState(true)
  
  return (
    <div id="productos">
      <img src={item.img} />
      <h4>{item.nombre}</h4>
      <h5>$ {item.precio}</h5>
      <h6>Detalle del producto</h6>
      {confCompra ? <ItemCount initial={1} stock={7} onAdd={onAdd}/> : <Link to= '/carrito' className="btn"><p className="pcarrito">Ir al carrito</p><CartWidget /></Link>}
    </div>
    
  );
};

export default ItemDetail;