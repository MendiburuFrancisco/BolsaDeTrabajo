import React from "react";
import UTN_LOGO from "./../../assets/img/logo_utn.png";

const Footer = () => {
  return (
    <div className="bg-gray-700 text-white flex flex-col md:flex-row justify-evenly items-center">
      <div>
        <img src={UTN_LOGO} alt="logo" className="h-10 my-5" />
      </div>
      <div className="text-center md:text-left">
        <span className="font-semibold"> FACULTAD REGIONAL ROSARIO</span> <br />
        Universidad Tecnológica Nacional <br />
        <span className="font-semibold">CONTACTOS:</span> ZEBALLOS 1341 -
        S2000BQA - ROSARIO
        <br />
        0341 - 4481871{" "}
        <a
          href="https://www.frro.utn.edu.ar/contenido.php?cont=831&subc=55"
          className="hover:underline"
          target="_blank "
        >
          Teléfonos directos e Internos
        </a>
      </div>
      <div>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="py-5"
            title="mapaUtn"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1183.654651540472!2d-60.64347061692509!3d-32.95415312441729!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab11d0eb49c3%3A0x11f1d3d54f950dd0!2sUniversidad%20Tecnol%C3%B3gica%20Nacional%20%7C%20Facultad%20Regional%20Rosario!5e0!3m2!1ses!2sar!4v1694265721433!5m2!1ses!2sar"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
