import React from "react";

const ItemDetail = (props) => {
const item = props.itemProductos;

  return (
    <div id="productos">
      <img src={item.img} alt={item.nombre} />
      <h4>{item.nombre}</h4>
      <h5>$ {item.precio}</h5>
      <h6>medidas 22cm x 15cm</h6>
    </div>
  );
};

export default ItemDetail;