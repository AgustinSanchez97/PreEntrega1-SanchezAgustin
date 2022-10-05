import { useState } from "react"
import { Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const ItemCount = (productData) =>{
    const [count,setCount] = useState(0)
    
    const handleClick = (value) =>{
        if(value < 0) return        
        if(value > productData.productData.stockQuantity) return
        setCount(value)
    }

    return(

        <>
            <Container fluid>
                <Row>
                    <Col>
                        <button onClick={() => handleClick(count-1)}>-</button>
                    </Col>
                    <Col>
                        <h4>Cantidad de Clicks {count} </h4>
                    </Col>
                    <Col>
                        <button onClick={() => handleClick(count+1)}>+</button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemCount