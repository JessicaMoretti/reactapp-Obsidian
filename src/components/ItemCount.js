import {useState} from "react"

const ItemCount =({initial,stock,onAdd}) => {
    
    let [contador,setContador] = useState(initial)

    const agregar =()=>{
        if (contador<stock){
        setContador(contador+1)
        }
    }

    const restar =()=>{
        if (contador>initial){
            setContador(contador-1)
        }
    }

    const confirmar =()=>{
        onAdd(contador)
    }

    return (
        <>
            <p>Productos Seleccionados : {contador}</p>
            <button className="btn" onClick={agregar}>Agregar</button>
            <button className="btn" onClick={restar}>Quitar</button>
            <button className="confirmar" onClick={confirmar}>Confirmar Compra</button>
        </>
    )
}
    
export default ItemCount;
