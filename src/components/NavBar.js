import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <Link to= '/'>INICIO</Link>
            <Link to= '/categoria/carteras'>CARTERAS</Link>
            <Link to= '/categoria/mochilas'>MOCHILAS</Link>
            <Link to= '/carrito'><CartWidget /></Link>
        </nav>
    );
}

export default NavBar;