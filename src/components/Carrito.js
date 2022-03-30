import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { contexto } from './CartContext'
import CARRITOVACIO from '../images/CARRITOVACIO.png'

const Carrito = () => {

  const { carrito, borrarDelCarrito, calcularTotal,limpiarCarrito } = useContext(contexto)
  const confirmar =()=>{
    limpiarCarrito()
  }

  return (

    <>
      {carrito&& carrito.length? <>
        {
          carrito.map(elemento => (
            <div id= "productos" key={elemento.producto.id}>
              <img src={elemento.producto.img}/>
              <h4>{elemento.producto.nombre}</h4>
              <h5> ${elemento.producto.precio}</h5>
              <p>Unidades seleccionadas: {elemento.cantidad}</p>
              <button className="pcarrito" onClick={() => borrarDelCarrito(elemento.producto.id)}>borrar</button>
            </div>   
          ))
        }
        <div id='productos'>
          <p className="total"> Total: ${calcularTotal()}</p>
          <button className="confCompra" onClick={()=>{confirmar()}}><p>Terminar mi Compra</p></button>
        </div>
      </>: <Link id="link" to="/"> 
          <img src={CARRITOVACIO}></img>
          <p id="carritoVacio">Carrito Vacio, Ir a Inicio</p>
        </Link>}
    </>
  )
}

export default Carrito
