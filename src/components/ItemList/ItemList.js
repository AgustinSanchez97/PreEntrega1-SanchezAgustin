import Item from "./Item"

const ItemList = ({products = []}) => {
    return(

        <>
            <h1>Listado de productos</h1>
            <div className="row ">



                    {products.map((product) => (
                        
                            <Item key= {product.id} productData={product}/>
                        
                    ))}

            </div>

        </>

    )

}

export default ItemList