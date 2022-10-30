import { useContext, useEffect, useState } from "react";
import { Alert, Button, Form, Modal, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";
import CartContext from "../contexts/CartContext";
import { createOrder } from "../utils/orders";


const OrderModal = ({showModal,onClose}) =>{

    const{ finalPrice,cart,clear} = useContext(CartContext)

    const [user, setUser] = useState({
        name:"",
        number: "",
        email: ""
    });



    const [validated, setValidated] = useState(false);

    const [orderId, setOrderId]= useState()
    
    const [firstEmail, setFirstEmail] = useState("first");
    const [secondEmail, setSecondEmail] = useState("second");
    const [emailValidated, setEmailValidated] = useState(false);
    const [orderInProgress, setorderInProgress] = useState(false);



    //Tuve que ponerlo en el use effect porque por algun motivo si lo hacia en onChange siempre estaba atrasado el value por 1 letra. Me contaba que estaba en true cuando debia ser el estado anterior y se setteaba en false cuando tenia que estar en true :,)
    useEffect(()=>{
        if(firstEmail===secondEmail) setEmailValidated(true)
        if(firstEmail!==secondEmail) setEmailValidated(false)
        
    })

    const onChange = (field,value) =>{
        
        if(field === "email" && value !== "") setFirstEmail(value)
        if(field === "email2" && value !== "") setSecondEmail(value)
        /*
        //console.log(firstEmail === secondEmail)
        if(firstEmail===secondEmail) setEmailValidated(true)
        if(firstEmail!==secondEmail) setEmailValidated(false)
        */
       setUser({
           ...user,
           [field]:value
        })
    }
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {          
          event.stopPropagation();          
        }        
        else{
            if(!emailValidated) return
            setorderInProgress(true)
            
            makeOrder()            
        }
        setValidated(true);
        
      }

      const makeOrder = async () =>{
        const newOrder = {
            buyer : user,
            items: cart,
            total: finalPrice
        }
        const newOrderId = await createOrder(newOrder)
        setOrderId(newOrderId)        
        clear()
      }
    
 return(     
     <Modal show={showModal} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Finalizar Compra</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={ handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                        required
                                             
                        type="text" 
                        placeholder="Ingrese nombre" 
                        onChange={(event)=> onChange("name",event.target.value)}
                        />        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Numero de Telefono</Form.Label>
                        <Form.Control
                        required
                        type="text"
                        placeholder="Ingrese su telefeno"
                        onChange={(event)=> onChange("number",event.target.value)}
                        />        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Direccion Email</Form.Label>
                        <Form.Control
                        required
                        type="email"
                        placeholder="Ingrese su email" 
                        onChange={(event)=> onChange("email",event.target.value)}
                        />        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Repita su Email</Form.Label>
                        <Form.Control
                        required
                        type="email"
                        placeholder="Ingrese su email"
                        onChange={(event)=> onChange("email2",event.target.value)}
                        />        
                    </Form.Group>
                    {!orderInProgress &&(
                        <>
                            <Button variant="secondary" onClick={ () =>onClose()}>
                                Cancelar
                            </Button>
                            <Button variant="primary" type="submit"  >
                                Comprar
                            </Button>                    
                        </>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>

                {orderId &&(
                    <>
                         <Alert key={"success"} variant={"success"}>
                                Gracias por su compra, aqui esta su id de seguimiento: {orderId}
                        </Alert>    
                        <Button variant="primary">
                            <Nav.Link className="hoverable" as={Link} to="/">
                                Continuar comprando
                            </Nav.Link>                            
                    </Button>         
                    </>
                )}



                
            </Modal.Footer>
        </Modal>
    )   
}

export default OrderModal;