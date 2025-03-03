import React from 'react';
import './Error.css';
const Error = () => {
  return (
    <>
      <div className="container">
        <div className="container">
          <div class="container empty-cine">
            <img src="/img/pantalla-de-cine.png" alt="cine vacío" />
            <h1>La lista está vacía</h1>
            <p>¡Parece que por el momento no hay películas!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
