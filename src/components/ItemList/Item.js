import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Item = ({productData ,isInDetail}) => {
    return(
      <>
      {isInDetail && (
        <Card className=' card cardStyle mx-auto my-4' style={{ width: '20rem' }}>
          <Card.Img variant="top" src={productData.img} />
          <Card.Body>
            <Card.Title>{productData.name}</Card.Title>
            <Card.Text>
            ${productData.price}
            </Card.Text>
            
            <Card.Text>
                {productData.description}
            </Card.Text>
            
          </Card.Body>
        </Card>

      )}
      <div className="col-lg-4 p-3">

      {!isInDetail && (
        <Card className='card rounded-4 cardStyle'>
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
              <Button variant="primary" className=''>
    
              Ver detalle
              </Button>
            </Link>
          </Card.Body>
        </Card>

      )}
    </div>
    </>
    )
}

export default Item