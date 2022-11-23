import ItemCount from "../ItemCount/ItemCount"
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Item = ({product}) => {
  const [contador, setContador] = useState(0);
  const navigate = useNavigate();

  const handleDetail = () => {
    console.log('Navega hacia el detail');
    navigate(`/item/${product.id}`)
  };

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