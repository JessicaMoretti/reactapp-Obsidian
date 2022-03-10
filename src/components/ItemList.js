import React from "react";
import Item from "./Item";

const ItemList = (props) => {
  const listaProductos = props.lista;

  return (
    <div id= "imagenes">
      {listaProductos.map((cadaProducto) => {
        return <Item producto={cadaProducto} />;
      })}
    </div>
  );
};

export default ItemList;