import React from "react";

function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container text-center py-3">
        <p>
          &copy; {new Date().getFullYear()} Derechos reservados a:
        </p>
        <p>
          <a 
            href="https://github.com/Moises324" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ marginRight: "15px", color: "#ffffff" }}
          >
            <i className="fa-brands fa-github"></i> Moises Gavidia
          </a>
          <a 
            href="https://github.com/VFloresr28?tab=following" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "#ffffff" }}
          >
            <i className="fa-brands fa-github"></i> Valentina Flores
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
