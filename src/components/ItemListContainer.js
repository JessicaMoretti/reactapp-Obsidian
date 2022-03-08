import ItemCount from "./ItemCount"

const ItemListContainer =(props) =>{
    
    const greeting=props.greeting
    console.log(props)
    return(
        <>
            <h1>{greeting}</h1>
            <ItemCount initial={1} stock={7}/>
        </>
    );
}

export default ItemListContainer;