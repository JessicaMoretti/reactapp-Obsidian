import {useState} from "react"

const ItemCount =(props) => {
    
    let [contador,setContador] = useState(props.initial)
    console.log(props)

    const agregar =()=>{
        if (contador<props.stock){
        setContador(contador+1)
        }
    }

    const restar =()=>{
        if (contador>0){
            setContador(contador-1)
        }
    }


    return (
        <>
            <p>Productos Seleccionados : {contador}</p>
            <button className="btn" onClick={agregar}>Agregar</button>
            <button className="btn" onClick={restar}>Restar</button>
        </>
    )
}
    
export default ItemCount;
