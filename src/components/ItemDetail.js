import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = (props) => {
  const item = props.itemProductos;

  const onAdd = (unidades) => {
  console.log("Productos agregados al carrito")
  console.log(unidades)
  };

  return (
    <div id="productos">
      <img src={item.img} />
      <h4>{item.nombre}</h4>
      <h5>$ {item.precio}</h5>
      <h6>Detalle del producto</h6>
      <ItemCount initial={1} stock={7} onAdd={onAdd}/>
    </div>
    
  );
};

export default ItemDetail;