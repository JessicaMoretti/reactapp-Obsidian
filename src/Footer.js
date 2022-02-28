import iglogo from "./images/iglogo.png"
import wlogo from "./images/wlogo.png"

function Footer(){
    return (
        <footer id= "main__footer">
            <p id= "contacto__redes">SEGUINOS EN REDES SOCIALES</p>
            <p id= "contacto__w">Hace tu pedido por Whatsapp</p>
            <div id="redes">
                <a href="#">
                    <img src={iglogo} alt="instagram" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=541133044420">
                    <img src={wlogo} alt="whatsapp" />
                </a>
            </div>
        </footer>
    )
}

export default Footer