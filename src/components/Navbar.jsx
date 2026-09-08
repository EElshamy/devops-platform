import { NavLink } from "react-router-dom";
import { Terminal } from "lucide-react";

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "DevOps", path: "/devops" },
    { name: "Cloud", path: "/cloud" },
    { name: "Kubernetes", path: "/kubernetes" },
    { name: "Docker", path: "/docker" },
    { name: "Skills", path: "/skills" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <span className="logo-icon">
            <Terminal size={17} />
          </span>

          <span>DEVOPS HUB</span>
        </NavLink>

        <nav className="navbar-links">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
