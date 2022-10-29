import { useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import "./CartWidget.css"


const CartWidget = () =>{
  const{ finalQuantity } = useContext(CartContext)



    return(
    <>
        <Link to="/cart">
            <MdOutlineShoppingCart/>
        </Link>
        {finalQuantity > 0 &&(

          <Badge bg='dark' pill> {finalQuantity}</Badge>
        )}
        
    </>
    

    )
}

export default CartWidget