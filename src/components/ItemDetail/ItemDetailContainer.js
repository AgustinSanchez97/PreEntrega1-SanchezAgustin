import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { getProduct } from "../../utils/stockProducts"
import ItemDetail from "./ItemDetail"





const ItemDetailContainer = () => {
  const [product,setProduct] = useState()
  const{id} = useParams()
  
  useEffect(()=> {
    getProduct(id,"id")
    .then((data) => {      
      setProduct(data)
    })
    .catch(error => console.warn(error))
  },[id])
  
  return(
    <Container>
      {product && <ItemDetail productData={product}/>}
      <h1> prueba</h1>
    </Container>

    )

}

export default ItemDetailContainer