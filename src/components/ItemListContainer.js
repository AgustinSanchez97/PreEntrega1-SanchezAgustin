
import './ItemListContainer.css';


const ItemListContainer = ({greeting}) =>{

    return(

        <>
            <h1>Productos</h1>
            <h3 className="greetingText">{greeting}</h3>

        </>

    )
}

export default ItemListContainer