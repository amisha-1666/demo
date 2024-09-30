// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark text-white bg-dark">
      <div className="container-fluid">
        {/* Link component without a nested <a> */}
        <Link href="/" className="navbar-brand">
          My Website
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/teams" className="nav-link">
                Teams
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
