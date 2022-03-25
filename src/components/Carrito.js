import React from 'react'
import { useContext } from 'react'
import { contexto } from './CartContext'

const Carrito = () => {

  const {carrito,borrarDelCarrito} = useContext(contexto)

  return (
   
    <>
    <h2>Carrito</h2>
    {
      carrito.map(producto=>(
        <div key={producto.id}>
          <p>{producto.nombre}</p>
          <p>{producto.precio}</p>
          <button onClick={()=>borrarDelCarrito(producto.id)}></button>
        </div>
      ))
    }
    </>
  )
}

export default Carrito