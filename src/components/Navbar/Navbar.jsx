import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ImSearch } from 'react-icons/im';
import { FaShoppingCart } from 'react-icons/fa';
import { useScroll } from '../hooks/useScroll';
import { contextoLord } from '../Contexts/ContextProviderLord';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const { isDown } = useScroll();
  const [expandir, setExpandir] = useState(false);
  const [dataContext, setDataContext] = useContext(contextoLord);
  const [searchValueHome, setSearchValueHome] = useState();
  const location = useLocation();
  const logOut = () => {
    localStorage.removeItem('isLogged');
    navigate('/login');
  };

  const toggleModal = () => {
    setExpandir(!expandir);
  };

  const getValueSearch = () => {
    if (searchValueHome.trim().length > 0) {
      console.log('Valor del input:', searchValueHome);

      // if (location.pathname == '/home') {

      // }
      setDataContext(prevDataContext => ({
        ...prevDataContext,

        search: searchValueHome,
      }));

      // Aquí puedes hacer algo con searchValue, como navegar a otra página o filtrar datos
    } else {
      console.log('El input está vacío');
      setDataContext(prevDataContext => ({
        ...prevDataContext,

        search: null,
      }));
    }
  };
  useEffect(() => {
    console.log(`Estás en la ruta: ${location.pathname}`);
  }, [location]);
  useEffect(() => {
    console.log(dataContext.misPeliculas, 'SOY peliculas compradas');
  }, [dataContext]);

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDown ? 'backgroundTransparent' : 'background-nav'
      }`}
    >
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleModal}
        aria-controls="navbarSupportedContent"
        aria-expanded={expandir}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse ${expandir ? 'show' : ''}`}
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item mx-1">
            <NavLink className="nav-link nav-nav-item" to="/home">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item mx-1">
            <NavLink className="nav-link nav-nav-item" to="/renta">
              Rentar
            </NavLink>
          </li>
          <li className="nav-item mx-1">
            <NavLink className="nav-link nav-nav-item" to="/comprar">
              Comprar
            </NavLink>
          </li>

          <li className="nav-item mx-1">
            <NavLink className="nav-link nav-nav-item" to="/misPeliculas">
              Mis Películas
            </NavLink>
          </li>

          <li className="nav-item mx-1">
            <NavLink className="nav-link nav-nav-item" to="/contacto">
              Contacto
            </NavLink>
          </li>
        </ul>

        <form className="d-flex justify-content-end pe-3" role="search">
          {/* <div className="d-flex justify-content-center align-items-center pe-2">
            <label htmlFor="">{dataContext?.login?.myUser} </label>
          </div> */}

          <NavLink className="btn btn-car-shop nav-item me-2" to="/carShop">
            <div className="cart-icon-container">
              <FaShoppingCart className="car" />
              {dataContext.productos.length > 0 && (
                <span className="cart-count">
                  {dataContext.productos.length}
                </span>
              )}
            </div>
          </NavLink>

          <input
            className="form-control me-2 form_input-width"
            type="search"
            placeholder="Buscar"
            aria-label="Search"
            value={searchValueHome}
            onInput={e => {
              if (e.target.value === '') {
                setDataContext(prevDataContext => ({
                  ...prevDataContext,

                  search: null,
                }));
              }
            }}
            onChange={e => setSearchValueHome(e.target.value)}
          />
          <button
            onClick={getValueSearch}
            className="btn btn-danger btn-border"
            type="button"
          >
            <ImSearch className="searchIcon" />
          </button>
          <ReactTooltip
            id="tooltip-exit"
            place="bottom-end"
            variant="error"
            content={`Usuario:  ${dataContext?.login?.myUser}`}
            className="tooltip-exit"
          />
          <img
            data-tooltip-id="tooltip-exit"
            className="img"
            onClick={logOut}
            src="/img/salida.png"
            alt="img"
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
