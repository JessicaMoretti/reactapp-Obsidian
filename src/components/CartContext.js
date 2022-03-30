import { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto;

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);

    const calcularTotal = ()=>{
        let total = 0
        carrito.forEach(elemento => {
            total += elemento.producto.precio *elemento.cantidad
        });
        return total
    }

    const calcularTotalItems = ()=>{
        let total = 0
        carrito.forEach(elemento => {
            total += elemento.cantidad
        });
        return total
    }

    const borrarDelCarrito = (id)=>{
        
        const carritoAux = carrito.filter(elemento=>elemento.producto.id !==id);
        setCarrito(carritoAux)
    }

    const agregarAlCarrito = (producto, cantidad) => {
        const carritoAux = [...carrito];
        const productoEnElCarrito = carrito.some((elemento)=>{  
            return elemento.producto.id === producto.id
        })
        if(productoEnElCarrito){
            const productoEncontrado = carritoAux.find((prodElemento)=>{
                return prodElemento.producto.id === producto.id
            })
            productoEncontrado.cantidad += cantidad 
        }else{
            carritoAux.push({ producto, cantidad });
        }
       
        setCarrito(carritoAux)
    };

    const limpiarCarrito = () => {
        setCarrito([]);
    };

    const valorDelContexto = {
        borrarDelCarrito,
        limpiarCarrito,
        carrito,
        agregarAlCarrito,
        calcularTotal,
        calcularTotalItems,
    };

    return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default MiProvider;