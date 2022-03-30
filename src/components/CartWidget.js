import { useContext } from "react";
import {contexto} from "./CartContext" 

const CartWidget =() =>{
    
    const{calcularTotalItems}=useContext(contexto);
    
    return(
        <>
        {calcularTotalItems()>0 ?<div className="btn">
            <i className="fa-solid fa-cart-shopping">
                <div>{calcularTotalItems()}</div>
            </i>
        </div>:null}
        </>
)};


export default CartWidget;