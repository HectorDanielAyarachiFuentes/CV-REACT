// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contacto</h5>
            <p>Email: tuemail@example.com</p>
            <p>Teléfono: +123 456 789</p>
          </div>
          <div className="col-md-4">
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.linkedin.com/in/tu-linkedin" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/tu-twitter" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
              {/* Agrega más redes sociales según sea necesario */}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Ubicación</h5>
            {/* Agrega tu mapa de Google Maps aquí */}
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LATITUDE_LONGITUDE!2d-122.0841216432088!3d37.42299945051068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc2b808e03b5%3A0xc4e39e19e4e89487!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1615541839119!5m2!1sen!2sus"
              width="100%"
              height="150"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
