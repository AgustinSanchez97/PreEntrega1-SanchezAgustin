import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({productData}) => {
    return(

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productData.img} />
      <Card.Body>
        <Card.Title>{productData.name}</Card.Title>
        <Card.Text>
        ${productData.price}
        </Card.Text>
        
        <Card.Text>
            {productData.description}
        </Card.Text>
        <Link to={`/item/${productData.id}`}>
          <Button variant="primary">

          Ver detalle
          </Button>
        </Link>
      </Card.Body>
    </Card>

    )

}

export default Item