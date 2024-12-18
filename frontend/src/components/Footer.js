import React from "react";

function Footer() {
    return (
      <footer className="footer-custom text-center py-3">
        <div className="container">
          <p className="mb-0">Derechos reservados a XXXX &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    );
  }

export default Footer;