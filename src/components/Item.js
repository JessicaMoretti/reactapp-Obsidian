import React from "react";

const Item = (props) => {
  console.log(props);

  const producto = props.producto;

  return (
    <div id="productos">
      <img src={producto.img} alt={producto.nombre} />
      <h4>{producto.nombre}</h4>
      <h5>$ {producto.precio}</h5>
    </div>
  );
};

export default Item;