import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <nav>
            <a href="#">INICIO</a>
            <a href="#">PRODUCTOS</a>
            <a href="#">ACCESORIOS</a>
            <CartWidget/>
        </nav>
    );
}

export default NavBar;