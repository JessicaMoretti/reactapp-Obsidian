import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c3.png"

const itemProductos = [
    { nombre: "cartera 1", precio: 1500, img: c1 },
    { nombre: "cartera 2", precio: 2500, img: c2 },
    { nombre: "cartera 3", precio: 3500, img: c3 },
];

const ItemListContainer = (props) => {
    const [listaProductos, setListaProductos] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemProductos);
            }, 2000);
        }).then((productos) => {
            setListaProductos(productos);
        });
    });

    const greeting = props.greeting
    return (
        <>
            <h1>{greeting}</h1>
            <ItemList lista={listaProductos} />

            {<ItemCount initial={1} stock={7}/>}
        </>
    );
}

export default ItemListContainer;