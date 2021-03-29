import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-success justify-content-between ">
      <div className="container">
        <div>
          <h1>S.I.D</h1>
        </div>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link text-white text-uppercase" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/countires">
              Countries
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
