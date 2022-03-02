import ItemListContainer from "./components/ItemListContainer";
import c1 from "./images/c1.png"
import c2 from "./images/c2.png"
import c3 from "./images/c3.png"

const Main = () => {
    return (
        <main className="container">
            <div id="wab">
                <ItemListContainer greeting="WE ARE BLACK"/>
            </div>
            <div id= "imagenes">
                <img src={c1} alt="cartera1" />
                <img src={c2} alt="cartera2" />
                <img src={c3} alt="cartera3" />
            </div>
        </main>
    );
}

export default Main;