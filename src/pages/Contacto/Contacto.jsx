import React from 'react';
import './Contacto.css';
const Contacto = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="card-body ">
            <h5 className="card-title text-center">Lord Videos</h5>
            <p className="card-text ms-5">
              <span className="text-bold">Equipo:</span> <span>1003</span>
            </p>
            <p className="card-text ms-5">
              <span className="text-bold">Integrantes:</span>{' '}
            </p>
            <ol className="card-text ms-5">
              <li>Miguel Ortiz Ramirez</li>
              <li>Jose Abraham Lopez Martinez</li>
              <li>Oscar Serrano Yañez </li>
            </ol>

            <div className="d-flex justify-content-center">
              <iframe
                title="Lord Videos"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.831730270342!2d-99.20705843533855!3d19.442895142193933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d2021754006c6d%3A0xb757eac0fd238347!2sBlvd.%20Miguel%20de%20Cervantes%20Saavedra%20397%2C%20Col.%20Irrigaci%C3%B3n%2C%20Miguel%20Hidalgo%2C%2011500%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses-419!2smx!4v1731991663395!5m2!1ses-419!2smx"
                width="600"
                height="350"
                style={{ border: '0' }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;
