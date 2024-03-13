// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo"
      />
      <h1 className="logo-name">Wave</h1>
    </div>
    <ul className="nav-links">
      <li>
        <Link className="list-item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="list-item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="list-item" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
