
import ItemCount from "../ItemCount"
import Item from "../ItemList/Item"


const ItemDetail = ({productData}) => {
    
    
    
    return(

        <>
            <Item productData={productData}/>
            <ItemCount productData={productData}/>
        </>
    )

}

export default ItemDetail