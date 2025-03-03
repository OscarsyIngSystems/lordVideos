import React, { useContext, useEffect, useState } from 'react';
// import { movies } from '../../assets/moviesCompra.json';
import './Comprar.css';
import Catalogo from '../../components/Catalogo/Catalogo';
import axios from 'axios';
import Error from '../../components/Error/Error';
import { contextoLord } from '../../components/Contexts/ContextProviderLord';
const Comprar = () => {
  const [movies, setMovies] = useState();
  const [dataContext, setDataContext] = useContext(contextoLord);
  useEffect(() => {
    getMovies();
  }, [dataContext.search]);

  const getMovies = () => {
    let url =
      dataContext.search != null
        ? `http://localhost:8080/api/buscador/comprar?search=${dataContext.search}`
        : 'http://localhost:8080/api/buscador/comprar';
    axios.get(url).then(res => {
      const data = res.data;
      console.log(data, 'SOY DATA ');

      setMovies(data);
    });
  };
  return <>{movies?.length > 0 ? <Catalogo data={movies} /> : <Error />}</>;
};

export default Comprar;
