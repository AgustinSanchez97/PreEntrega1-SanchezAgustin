export const products = [
    {
        "id": 0,
        "name": "Zapatillas Negras Ajustables",
        "img": "https://http2.mlstatic.com/D_NQ_NP_780574-MLA45347931583_032021-O.webp",
        "description": "Zapatillas ergonómicas con almohadillas incorporadas para suavizar el impacto a la hora de hacer ejercicio",
        "price": 5300,
        "quantity": 0,
        "stockQuantity": 8,
        "clothType": "calzado"
    },
    {
        "id": 1,
        "name": "Zapatillas Negras con Cordones",
        "img": "https://http2.mlstatic.com/D_NQ_NP_699842-MLA47574858361_092021-O.webp",
        "description": "Zapatillas ergonómicas con cubierta antimanchas y semi-impermeables, ideal para un día de lluvia",
        "price": 4300,
        "quantity": 0,
        "stockQuantity": 8,
        "clothType": "calzado"
    },
    {
        "id": 2,
        "name": "Zapatillas Blancas con cordones",
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Zapatillas_Superstar_Blanco_EG4958_01_standard.jpg",
        "description": "Zapatillas blancas con rayas negras y cordones",
        "price": 3600,
        "quantity": 0,
        "stockQuantity": 8,
        "clothType": "calzado"
    },
    {
        "id": 3,
        "name": "Zapatillas Negras y Blancas con Cordones",
        "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/95270819b0c54d1ea247ac3200c55b88_9366/Tenis_Duramo_SL_Gris_FY6702_01_standard.jpg",
        "description": "Zapatillas negras con rayas blancas y cordones",
        "price": 3300,
        "quantity": 0,
        "stockQuantity": 8,
        "clothType": "calzado"
    },
    {
        "id": 4,
        "name": "Jeans Azules",
        "img": "https://www.modarm.com/medias/000005000000842986-1200x1200-0.jpg?context=bWFzdGVyfGltYWdlc3wzMjM2MDZ8aW1hZ2UvanBlZ3xoYzEvaGFlLzk5MDA0MDY1NzEwMzgvMDAwMDA1MDAwMDAwODQyOTg2LTEyMDB4MTIwMF8wLmpwZ3wyNzNkYzU5ZTc2ZmMyNWY3NTk5YzJkZDQ0NjUwY2JiNzg1YzBlODM5YTJmZGE0OGYzOGMwNGZkYjU1MDlmMzA0",
        "description": "Jeans Azules",
        "price": 6100,
        "quantity": 0,
        "stockQuantity": 8,
        "clothType": "pantalones"
    },
    
    {
        "id": 11,
        "name": "Remera Negra",
        "img": "https://cdn.shopify.com/s/files/1/0002/0208/0315/products/modellodimensionierighelliT-SHIRT_c2846618-15a8-4a95-996b-60605fb6cee2_480x.jpg?v=1650633597",
        "description": "Remera Negra",
        "price": 2500,
        "quantity": 0,
        "stockQuantity": 8,
        "clothType": "remeras"
    },
    {
        "id": 12,
        "name": "Remera Blanca Dibujo",
        "img": "https://http2.mlstatic.com/D_NQ_NP_922349-MLA49809226513_042022-O.webp",
        "description": "Remera Blanca Dibujo",
        "price": 2800,
        "quantity": 0,
        "stockQuantity": 8,
        "clothType": "remeras"
    },
    {
        "id": 13,
        "name": "Remera Blanca Mangas Largas",
        "img": "https://cdntienda.universoshopweb.com/pub/media/catalog/product/cache/d7574f12538e546d58299d712612fd64/r/e/remeramlarga.jpg",
        "description": "Remera Blanca Mangas Largas",
        "price": 3800,
        "quantity": 0,
        "stockQuantity": 8,
        "clothType": "remeralarga"
    }
]


export const getAllProducts = () =>{
 const promise = new Promise((resolve) =>{
    setTimeout(() => {
        return resolve(products)        
    }, 2000);
 })
 return promise
}

export const getProduct = (filterData ) =>{
    const promise = new Promise((resolve) =>{

        const result = products.find((product) => product.id === parseInt(filterData))

       setTimeout(() => {
           return resolve(result)        
       }, 2000);
    })
    return promise
   }


   export const getProductsByClothType = (filterData) =>{
    const promise = new Promise((resolve) =>{

        const results = products.filter((product) => product.clothType === filterData)
        
       setTimeout(() => {
           return resolve(results)        
       }, 2000);
    })
    return promise
   }