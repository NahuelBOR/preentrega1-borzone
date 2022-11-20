import { useEffect, useState } from "react"
import { data } from "../../data/data"
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 3000);
  });

  useEffect(() => {
    getProducts.then(respuesta => {
      setProductList(respuesta);
    }).then(() => {
      console.log(productList);
    })
  }, [productList]);

  return (
    <>
    <div>
      <ItemList productList={productList}/>
    </div>
    </>
    
  )
}

export default ItemListContainer