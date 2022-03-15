import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const Main = () => {
    return (
        <main className="container">
            <div id="wab">
                <ItemListContainer greeting="WE ARE BLACK"/>
                <ItemDetailContainer/>
            </div>   
        </main>
    );
}

export default Main;