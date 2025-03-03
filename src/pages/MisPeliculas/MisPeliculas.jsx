import React, { useContext, useEffect, useState } from 'react';
import './MisPeliculas.css';
import { contextoLord } from '../../components/Contexts/ContextProviderLord';
import Catalogo from '../../components/Catalogo/Catalogo';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MisPeliculas = () => {
  const [dataContext, setDataContext] = useContext(contextoLord);
  const navigate = useNavigate();

  const [misMovies, setMisMovies] = useState();

  useEffect(() => {
    getMisMovies();
  }, [dataContext.search]);

  const getMisMovies = () => {
    let url =
      dataContext.search != null
        ? `http://localhost:8080/api/buscador/misPeliculas/1?search=${dataContext.search}`
        : 'http://localhost:8080/api/buscador/misPeliculas/1';
    axios.get(url).then(res => {
      const data = res.data;
      console.log(data, 'SOY DATA ');

      setMisMovies(data);
    });
  };
  console.log(dataContext.misPeliculas, 'SOY PELICULAS A MOSTRar, mis pelis');
  const redirectHome = () => {
    navigate('/home');
  };
  return (
    <>
      {misMovies?.length > 0 ? (
        <>
          <Catalogo vista="misPeliculas" data={misMovies} />
        </>
      ) : (
        <>
          <div className="container">
            <div className="container">
              <div class="container empty-cine">
                <img src="/img/pantalla-de-cine.png" alt="cine vacío" />
                <h1>Tu lista está vacía</h1>
                <p>¡Parece que no has agregado nada a tu lista aún!</p>
                <button
                  onClick={redirectHome}
                  className="btn btn-outline-danger  mb-3"
                >
                  Empezar
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MisPeliculas;
