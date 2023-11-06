import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { categories } from "./categories";

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <div className="footer-menu">
          <h4>Categorias</h4>
          <ul>
            {categories.map((cat) => (
              <li key={cat.path}>
                <Link exact to={cat.path}>
                  {cat.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Nosotros</h4>
          <p>
            "Somos apasionados por los lenguajes y las tecnologías IT tanto como
            vos, y por eso te ofrecemos remeras y accesorios para que puedas
            demostrarlo"
          </p>
          <p>.- DeveloperStore</p>
        </div>
        <div className="footer-redes">
          <h4>¡Seguínos!</h4>
          <ul>
            <li>
              <FaFacebook /> /developerStore
            </li>
            <li>
              <FaInstagram /> /developerStore
            </li>
            <li>
              <FaWhatsapp /> +54 (911) 1234-5678
            </li>
          </ul>
        </div>
      </div>
      <p className="container copyright">
        Proyecto ReactJS | Coderhouse 2021 | Valeria Silveira
      </p>
    </footer>
  );
};

export default Footer;
