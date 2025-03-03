import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { contextoLord } from '../components/Contexts/ContextProviderLord';

const RoutesPrivate = ({ children }) => {
  const [dataContext, setDataContext] = useContext(contextoLord);
  localStorage.setItem('isLogged', dataContext.login.logged);
  const lord = localStorage.getItem('isLogged');

  return lord ? children : <Navigate to="/login" />;
};

export default RoutesPrivate;
