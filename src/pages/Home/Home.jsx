import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
// import { movies } from '../../assets/movies.json';
import Catalogo from '../../components/Catalogo/Catalogo';
import axios from 'axios';
import Error from '../../components/Error/Error';
import { contextoLord } from '../../components/Contexts/ContextProviderLord';
const Home = () => {
  const [movies, setMovies] = useState();
  const [dataContext, setDataContext] = useContext(contextoLord);

  useEffect(() => {
    getMovies();
  }, [dataContext.search]);

  const getMovies = () => {
    let url =
      dataContext.search != null
        ? `http://localhost:8782/movies/home?search=${dataContext.search}`
        : 'http://localhost:8782/movies/home';

    axios.get(url).then(res => {
      const data = res.data;
      console.log(data, 'SOY DATA ');

      setMovies(data);
    });
  };

  return <>{movies?.length > 0 ? <Catalogo data={movies} /> : <Error />}</>;
};

export default Home;
