import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';



const CartWidget = () =>{

    return(
    
      <Link to="/cart">
          <MdOutlineShoppingCart/>
      </Link>
    

    )
}

export default CartWidget