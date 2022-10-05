import Item from "./Item"

const ItemList = ({products}) => {
    return(

        <>
            <h1>lista de productos</h1>
            {products.map((product) => (
                <Item key= {product.id} productData={product}/>
                
            ))}
        </>

    )

}

export default ItemList