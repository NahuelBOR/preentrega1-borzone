import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'

const Item = ({product}) => {
  const [contador, setContador] = useState(0);

  return (
    <>
    <div className="item">
      <img alt={product.nombre} src={`img/${product.img}`} />
      <h2>{product.name}</h2>
      <h4>Talla  del producto {product.size}</h4>
      <h3>Color {product.color}</h3>
      <h3>{contador} / {product.stock}</h3>
      <ItemCount setContador={setContador} inicia={contador} stock={product.stock}/>
      <button>Ver detalle del Producto</button>
    </div>
    </>
    
  )
}

export default Item