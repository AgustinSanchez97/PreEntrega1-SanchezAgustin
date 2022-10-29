
import Spinner from 'react-bootstrap/Spinner';

const Loader = ({loading}) => {
    return <>{loading === true ? <Spinner animation="border" variant="info" /> : ""}</>
}
export default Loader
