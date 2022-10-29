import { createContext, useState } from "react";

const CartContext = createContext({})


export default CartContext

export const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])
    function addItem(product, quantity)
    {
        if(isInCart(product.id)) return changeQuantity(product, quantity)
        const item = {...product,quantity}
        setCart([...cart, item])
    }

    
    
    const finalPrice = cart.reduce((count,item) => count + (item.price*item.quantity),0)
    const finalQuantity = cart.reduce((count,item) => count + item.quantity,0)


    function changeQuantity(product, quantity)
    {
        const itemIndex = cart.findIndex((item)=> item.id === product.id)
        const itemDraft = {...cart[itemIndex]}
        itemDraft.quantity += quantity
        const cartDraft = [...cart]
        cartDraft[itemIndex] = itemDraft
        setCart(cartDraft)
    }

    function removeItem(itemId)
    {
        const itemDraft = cart.filter((item)=> item.id !== itemId)
        setCart(itemDraft)
      
    }

    function clear()
    {
        setCart([])
    }
    
    function isInCart(id)
    {
        return cart.some((item)=> item.id === id)
    }

    return(
        <CartContext.Provider value={{cart,addItem,removeItem,clear,isInCart,finalPrice,finalQuantity}}>
            {children}
        </CartContext.Provider>
        )
    
}








