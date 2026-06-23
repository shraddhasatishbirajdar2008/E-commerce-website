import { Link } from 'react-router-dom'
import Logo from '../assets/Logo'

function Navbar({ cartCount }) {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo-link">
                    <Logo />
                    <span className="brand-name">ShopHub</span>
                </Link>

                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li>
                        <Link to="/cart" className="cart-link">
                            Cart
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
