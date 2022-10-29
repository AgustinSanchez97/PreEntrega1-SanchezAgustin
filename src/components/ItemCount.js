import { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const ItemCount = ({ initial, stock,cartQuantity,onAdd,handleOutOfStock}) =>{
    const [count,setCount] = useState(parseInt(initial))

    const [showCount,setShowCount] = useState(true)


    
    const handleCount = (value) =>{        
        setCount(value)
    }
    //console.log(cartQuantity !== undefined)
     
    const stockValue = (initialStock)=>{
        if(typeof(cartQuantity) !== "undefined") 

        {
            if((initialStock - cartQuantity) <= 0) setShowCount(false)
            return initialStock - cartQuantity
            
        }
        return initialStock
    }

    const handleClick = () => onAdd(count)

    useEffect(()=>{        
        setCount(parseInt(initial))

    },[initial])

    return(

        <>
            {
                showCount &&
                (
                    <div >
                    <Container fluid className="pb-3  m-auto d-flex justify-content-center align-items-center">
                        <Row>
                            <Col className="text-center ">
                                <Button variant="danger" disabled={count <= 1} onClick={() => handleCount(count-1)}>-</Button>
                            </Col>
                            <Col>
                                <h4>Cantidad en stock:{stockValue(stock)} </h4>
                            </Col>
                            <Col>
                                <h4>Agregar al carro:{count} </h4>
                            </Col>
                            <Col className="text-center">
                                <Button variant="success" disabled={count >= stockValue(stock)} onClick={() => handleCount(count+1)}>+</Button>
                            </Col>                    
                        </Row>
                    </Container>
                    <div className="pb-3  m-auto d-flex justify-content-center align-items-center">

                        <Button className="text-center" variant="primary" onClick={ handleClick}> Confirmar Compra </Button>
                    </div>
                    </div>

                )
            }
            {
                !showCount && (
                    <Container fluid>
                        <h4 className="d-flex justify-content-center">Ya no hay mas stock de este producto </h4>
                        <Button className="d-flex justify-content-center mx-auto" variant="primary" onClick={() => handleOutOfStock()}>Volver</Button>
                    </Container>
                )
                
            }

            
        </>
    )
}

export default ItemCount