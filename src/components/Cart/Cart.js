import { useContext, useState } from "react"
import { Button, Container,  Image, Table } from "react-bootstrap"
import CartContext from "../../contexts/CartContext"
import { FiTrash2 } from "react-icons/fi"
import "./Cart.css"
import { Link } from "react-router-dom"
import OrderModal from "../OrderModal"


const buyerMock = {
    name:"coderhouse",
    phone: "1156458331",
    email: "coderhouse@mail.com"
}
const Cart = () => {
    const{ finalPrice,finalQuantity,cart, removeItem} = useContext(CartContext)
    const [user,setUser] = useState(buyerMock)
    const [showModal, setShowModal]= useState(false)

    
    // const finalPrice = cart.reduce((count,item) => count + (item.price*item.quantity),0)
    // const finalQuantity = cart.reduce((count,item) => count + item.quantity,0)
    
    

    function handleRemove(itemId)
    {
        removeItem(itemId)        
    }

    function handleOpen()
    {
        setShowModal(true)
    }

    function handleClose()
    {
        setShowModal(false)
    }


    

    let showTable = cart.length > 0
    
return(
    <>
        <Container id="cart" className="text-white">
            <h2>Carro de compras</h2>
            {showTable && (
                <>
                    <Table className="text-white" striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    <h5 className="text-white py-2 m-auto d-flex justify-content-center align-items-center">
                                        Accion                                            
                                    </h5>
                                </th>
                                <th>
                                    <h5 className="text-white py-2 m-auto d-flex justify-content-center align-items-center">
                                    Imagen de Producto                                            
                                    </h5>
                                </th>
                                <th>
                                    <h5 className="text-white py-2 m-auto d-flex justify-content-center align-items-center">
                                    Nombre                                            
                                    </h5>
                                </th>
                                <th>
                                    <h5 className="text-white py-2 m-auto d-flex justify-content-center align-items-center">
                                    Precio                                            
                                    </h5>
                                </th>
                                <th>
                                    <h5 className="text-white py-2 m-auto d-flex justify-content-center align-items-center">
                                    Cantidad                                            
                                    </h5>
                                </th>
                                <th>
                                    <h5 className="text-white py-2 m-auto d-flex justify-content-center align-items-center">
                                    SubTotal                                            
                                    </h5>
                                </th>

                            </tr>
                        </thead>
                        <tbody >
                            <>
                            {cart.map((item)=> (                        
                                <tr className="text-white" key={item.id}>
                                    <td className="text-white py-5 m-auto d-flex justify-content-center align-items-center"><FiTrash2 onClick={() => handleRemove(item.id)}/></td>
                                    <td className="text-white ">
                                        <div className="p-0 d-flex justify-content-center align-items-center">
                                            <Image roundedCircle fluid thumbnail className="imagesForCart" src={item?.img} />
                                        </div>
                                    </td>                                    
                                    <td className="text-white ">                                    
                                    <h5 className="text-white py-5 m-auto d-flex justify-content-center align-items-center">
                                        {item?.name}
                                        </h5>
                                    </td>                       
                                    <td className="text-white">
                                        <h5 className="text-white py-5 m-auto d-flex justify-content-center align-items-center">
                                            ${item?.price}
                                        </h5>
                                    </td>
                                    <td className="text-white">
                                        <h5 className="text-white py-5 m-auto d-flex justify-content-center align-items-center">
                                            {item?.quantity}
                                        </h5>
                                    </td>
                                    <td className="text-white ">
                                        <h5 className="text-white py-5 m-auto d-flex justify-content-center align-items-center">
                                            ${item?.price * item?.quantity}
                                        </h5>
                                    </td>
                                </tr>
                                ))}
                                
                                <tr>
                                    <td className="text-white" colSpan={4}>
                                    <h4 className="text-white py-1 m-auto d-flex justify-content-center align-items-center">
                                        Precio Total
                                    </h4>
                                    </td>                                                                    
                                    <td className="text-white">
                                    <h4 className="text-white py-1 m-auto d-flex justify-content-center align-items-center">                                        
                                        {finalQuantity} 
                                    </h4>
                                    </td>
                                    <td className="text-white">
                                    <h4 className="text-white py-1 m-auto d-flex justify-content-center align-items-center">
                                        ${finalPrice} 
                                    </h4>
                                    </td>
                                </tr>
                            </>
                        </tbody>
                    </Table>
                    <div className="d-flex justify-content-between">

                        <Link to="/">
                            <Button variant="success">Seguir comprando</Button>                        
                        </Link>
                        <Button variant="primary" onClick={() =>handleOpen()}>Finalizar Compra</Button>
                    </div>
                </>
                
            )}

            {!showTable && (
                <>
                    <h4>No se tienen articulos dentro del carro</h4>
                    <Link to="/">
                        <Button variant="success">Ver productos</Button>
                    </Link>
                </>
            )}
            {/*crear un nuevo componente para crear la orden */}
            <OrderModal 
            showModal={showModal} 
            onClose={handleClose}            
            />
        
            </Container>
    </>
    )

}

export default Cart