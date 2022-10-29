import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore"


export const getAllProducts = () =>{
    const database = getFirestore()
    const collectionReference = collection(database, "Items")

    return getDocs(collectionReference)
    .then(snapshot => {
        const list = snapshot.docs.map((doc) =>({
          id: doc.id,
          ...doc.data()
        })); 
        //console.log(list)
        return list
    })
    .catch(error => console.warn(error))

}

export const getProduct = (id ) =>{
    const database = getFirestore()
    const itemReference = doc(database, "Items", id)
    //console.log(itemReference)
    return getDoc(itemReference)
        .then(snapshot => {
        if (snapshot.exists()){
            const item = {
              id: snapshot.id,
              ...snapshot.data()
            };         

            return item
        }
    })
    
}



   export const getProductsByClothType = (categoryId) =>{
    const database = getFirestore()
    const collectionReference = collection(database, "Items")
    const collectionQuery = query(collectionReference,where("clothType", "==", categoryId))


    return getDocs(collectionQuery)
    .then(snapshot => {
        const list = snapshot.docs.map((doc) =>({
          id: doc.id,
          ...doc.data()
        })); 
        //console.log(list)
        return list
    })
    .catch(error => console.warn(error))

   }






