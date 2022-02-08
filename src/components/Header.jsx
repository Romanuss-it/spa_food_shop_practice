import { Link } from "react-router-dom"

function Header() {
  return (
    <>
      <nav className="cyan lighten-4">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            food
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contacts">contacts</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export { Header }
