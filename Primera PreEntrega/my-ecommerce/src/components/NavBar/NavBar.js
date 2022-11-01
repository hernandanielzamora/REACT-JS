import './navbarstyle.css'
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <nav className='menu-navbar'>
        <h1 className='navbar-title'>Zeta Store</h1>
        <ul className='navbar-list'>
            <li className='navbar-list-title'><a href='#' className='navbar-list-anchor'>Inicio</a></li>
            <li className='navbar-list-title'><a href='#' className='navbar-list-anchor'>Vendé tus skins</a></li>
            <li className='navbar-list-title'><a href='#' className='navbar-list-anchor'>Preguntas Frecuentes</a></li>
            <li className='navbar-list-title'><a href='#' className='navbar-list-anchor'>Conocenos</a></li>
            <li className='navbar-list-title'><a href='#' className='navbar-list-anchor'><CartWidget/></a></li>
        </ul>
    </nav>
  )
};
