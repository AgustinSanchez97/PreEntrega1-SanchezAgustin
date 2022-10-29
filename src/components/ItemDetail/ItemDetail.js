
import { useContext, useState } from "react"
import { Button, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartContext from "../../contexts/CartContext"
import ItemCount from "../ItemCount"
import Item from "../ItemList/Item"



const ItemDetail = ({productData}) => {
    const{ cart} = useContext(CartContext)

    //console.log(productData.id)

    
    
    const {addItem} = useContext(CartContext)
    const [count,setCount] = useState(0)
    const [showItemCount,setShowItemCount] = useState(true)
    const [showOutOfStock,setShowOutOfStock] = useState(false)

    
    const itemInCart = cart.find((item)=> item.id === productData.id)
    const handleAdd = (value)=>{
        setCount(value)
        setShowItemCount(false)
        addItem(productData,value)
    }

    const handleOutOfStock = ()=>{
        setShowItemCount(false)
    }

    return(

        <>
            <Item productData={productData} isInDetail={true} />
            {
                

                showItemCount && (
                    <ItemCount initial={1} stock={productData.stockQuantity} cartQuantity={itemInCart?.quantity}  onAdd={handleAdd} handleOutOfStock ={handleOutOfStock} />
                )
            }
            {

                !showItemCount && (
                <>
                    { showOutOfStock && (
                        <h4 className="d-flex justify-content-center">Nos quedamos sin stock de este producto</h4>
                    )}
                    <div className="d-flex justify-content-center">                        
                        <Button className="mx-5" variant="primary">
                            <Nav.Link className="hoverable" as={Link} to="/">
                                Continuar comprando
                            </Nav.Link>
                        </Button>
                        
                        <Button className="mx-5" variant="success">
                            <Nav.Link className="hoverable" as={Link} to="/cart">
                                Finalizar compra
                            </Nav.Link>
                        </Button>
                    </div>

                </>
                )
            }
        </>
    )

}

export default ItemDetail