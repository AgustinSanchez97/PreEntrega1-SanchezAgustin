
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
            //console.log(categoryName)
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
            <h1>Productos</h1>
            <h3 className="greetingText">{greeting}</h3>
            {products && <ItemList products={products} />}

        </>

    )
}

export default ItemListContainer