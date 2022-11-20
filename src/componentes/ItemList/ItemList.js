import Item from "../Item/Item"

const ItemList = ({productList}) => {
  return (
    <>
    <div className="list__container">
        {productList.map((product) => (
            <Item key={product.id} product={product} />
        ))}
    </div>
        

    </>
  )
}

export default ItemList