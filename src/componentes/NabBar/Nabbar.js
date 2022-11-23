import CardWidget from "../CartWidget/CardWidget"
import { Link } from "react-router-dom"

const Nabbar = () => {
  return (
    <nav className="nab">
        <Link to={'/'} className="site-title">Pop.mdp</Link>
        <ul>
            <li className="active">
            <Link to={'/asd'} className="carrito"><CardWidget /></Link>
            </li>
            <li className="active">
                <Link to={'/Productos'}  className="">Productos</Link>
            </li>
            <li className="active">
                <Link to={'/About'}  className="">About</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nabbar