

const ItemCount = ({setContador, inicia, stock}) => {

    const add = () => {
        if(inicia >= stock){
            return
        }
        setContador(inicia + 1);
    }
    const less = () => {
        if(inicia === 0){
            return
        }
        setContador(inicia - 1);
    }
  return (
    <div>
        <div>
            <button onClick={add}>Agregar</button>
            <button onClick={less}>Sacar</button>
        </div>
    </div>
  )
}

export default ItemCount