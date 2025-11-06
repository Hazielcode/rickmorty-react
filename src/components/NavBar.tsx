import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🛸 Rick & Morty Universe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navRM"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navRM">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink end to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/entities" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
                Entities
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
