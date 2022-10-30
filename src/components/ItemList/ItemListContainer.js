
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductsByClothType } from '../../utils/stockProducts';
import ItemList from './ItemList';
import './ItemListContainer.css';


const ItemListContainer = ({greeting}) =>{

    const {categoryName} = useParams()
    const [products,setProducts] = useState([])
 
    
    useEffect(()=>{

        if(categoryName){
            getProductsByClothType(categoryName)
            .then((productsData) => setProducts(productsData))
            .catch((error)=> console.warn(error))
        }

        else{
            getAllProducts()
                .then((productsData) => setProducts(productsData))
                .catch((error)=> console.warn(error))

        }
    },[categoryName])





    return(
        <>
        <div className='container text-white'>

            
            <h3 className="greetingText">{greeting}</h3>
            {products && <ItemList products={products} />}

        </div>
        </>

    )
}

export default ItemListContainer