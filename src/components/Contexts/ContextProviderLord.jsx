import { createContext, useEffect, useMemo, useState } from 'react';

export const contextoLord = createContext();

export const ContextProviderLord = ({ children }) => {
  const [dataContext, setDataContext] = useState({
    productos: [],
    search: '' || null,
    misPeliculas: [],
    login: {
      logged: false,
      myUser: '',
    },
  });

  return (
    <contextoLord.Provider value={[dataContext, setDataContext]}>
      {children}
    </contextoLord.Provider>
  );
};

export default ContextProviderLord;
