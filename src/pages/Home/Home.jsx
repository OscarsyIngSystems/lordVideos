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
    let myQuery = {
      query: {
        match: {
          title: dataContext?.search,
        },
      },
    };
    let url =
      dataContext.search != null
        ? `http://localhost:9200/movies_catalog/_search?pretty=true`
        : 'http://localhost:9200/movies_catalog/_search?pretty=true';

    if (dataContext.search != null) {
      console.log('ENTRE A POST');

      axios.post(url, myQuery).then(res => {
        const data = res.data;
        console.log(data, 'SOY DATA de post ');
        // const movies = data.hits.hits.map(hit => hit._source);
        setMovies(data.hits.hits.map(hit => hit._source));
      });
    } else {
      console.log('ENTRE A GET');

      axios.get(url).then(res => {
        const data = res.data;
        console.log(data, 'SOY DATA de get');

        setMovies(data.hits.hits.map(hit => hit._source));
      });
    }

    // axios.get(url).then(res => {
    //   const data = res.data;
    //   console.log(data, 'SOY DATA ');

    //   setMovies(data);
    // });
  };

  return (
    <>
      {movies?.length > 0 ? (
        <Catalogo isHome="true" data={movies} />
      ) : (
        <Error />
      )}
    </>
  );
};

export default Home;
