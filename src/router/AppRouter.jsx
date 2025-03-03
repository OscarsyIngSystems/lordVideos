import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import RoutesPrivate from './RoutesPrivate';
import Navbar from '../components/Navbar/Navbar';
import Renta from '../pages/Renta/Renta';
import Contacto from '../pages/Contacto/Contacto';
import Home from '../pages/Home/Home';
import Comprar from '../pages/Comprar/Comprar';
import CarShopView from '../pages/CarShopView/CarShopView';
import Login from '../login/Login';
import MisPeliculas from '../pages/MisPeliculas/MisPeliculas';

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route
          path="home"
          element={
            <RoutesPrivate>
              <Navbar />
              <Home />
            </RoutesPrivate>
          }
        />
        <Route
          path="Comprar"
          element={
            <RoutesPrivate>
              <Navbar />
              <Comprar />
            </RoutesPrivate>
          }
        />
        <Route
          path="renta"
          element={
            <RoutesPrivate>
              <Navbar />
              <Renta />
            </RoutesPrivate>
          }
        />
        <Route
          path="misPeliculas"
          element={
            <RoutesPrivate>
              <Navbar />
              <MisPeliculas />
            </RoutesPrivate>
          }
        />
        <Route
          path="contacto"
          element={
            <RoutesPrivate>
              <Navbar />
              <Contacto />
            </RoutesPrivate>
          }
        />
        <Route
          path="carShop"
          element={
            <RoutesPrivate>
              <Navbar />
              <CarShopView />
            </RoutesPrivate>
          }
        />

        <Route path="/*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
