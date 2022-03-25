import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'

const Carrito = () => {

  const {carrito,borrarDelCarrito} = useContext(contexto)
  console.log(carrito)

  return (
   
    <>
    <h2>Carrito</h2>
    {
      carrito.map(elemento=>(
        <div key={elemento.producto.id}>
          <p>{elemento.producto.nombre}</p>
          <p>{elemento.producto.precio}</p>
          <button onClick={()=>borrarDelCarrito(elemento.producto.id)}>borrar</button>
        </div>
      ))
    }
    </>
  )
}

export default Carrito
