import CardWidget from "../CartWidget/CardWidget"

const Nabbar = () => {
  return (
    <nav className="nab">
        <a href="/" className="site-title">Pop.mdp</a>
        <ul>
            <li className="active">
            <a href="/carrito" className="carrito"><CardWidget /></a>
            </li>
            <li className="active">
                <a href="/productos" className="">Productos</a>
            </li>
            <li className="active">
                <a href="/about" className="">About</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nabbar