import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";
import c1 from "../images/c1.png"
import c2 from "../images/c2.png"
import c3 from "../images/c3.png"

const itemCartera = {
    nombre: "cartera 1", precio: 1500, img: c1
}

const ItemDetailContainer = (props) => {
    const [itemProductos, setItemProductos] = useState({});

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(itemCartera);
            }, 2000);
        }).then((productos) => {
            setItemProductos(productos);
        });
    });

    const greeting = props.greeting
    return (
        <>
            <h1>{greeting}</h1>
            <ItemDetail itemProductos= {itemProductos} />

            {<ItemCount initial={1} stock={7}/>}
        </>
    );
}

export default ItemDetailContainer;