import React, { useContext, useEffect, useState } from 'react';
import { contextoLord } from '../../components/Contexts/ContextProviderLord';
import './CarShop.css';
import axios from 'axios';

import { RiDeleteBin5Line } from 'react-icons/ri';
import { useSweetalert } from '../hooks/useSweetalert';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
const CarShop = () => {
  const [dataContext, setDataContext] = useContext(contextoLord);
  const [total, setTotal] = useState(0);
  const [transaction, setTransaction] = useState();
  const navigate = useNavigate();

  const eliminarProducto = id => {
    setDataContext(prevDataContext => ({
      ...prevDataContext,
      productos: prevDataContext.productos.filter(
        producto => producto.idMovie !== id,
      ),
    }));
  };

  const pay = async () => {
    //AXIOS POST

    const { LordAlert } = useSweetalert(
      'Compra exitosa !',
      '',
      'success',
      'lordToast',
    );
    LordAlert();
    console.log(dataContext.productos, 'Productos comprados');
    console.log(dataContext.misPeliculas, 'PELICULAS');

    setDataContext(prevDataContext => ({
      ...prevDataContext,
      misPeliculas: Array.isArray(prevDataContext.misPeliculas)
        ? [...prevDataContext.misPeliculas, ...prevDataContext.productos]
        : [...prevDataContext.productos],
      productos: [],
    }));
    const postTransaction = () => {
      console.log('ENTRE A POST');

      const newTransactions = [];

      // Usamos forEach para recorrer los productos
      dataContext.productos.forEach(product => {
        newTransactions.push({
          id_user: 1,
          id_movie: product.idMovie,
          transaction: product.typeTransaction,
          date_transaction: null,
          date_expiration: null,
        });
      });

      // Actualizamos el estado de transaction con las nuevas transacciones
      setTransaction(prevTransaction => [
        ...prevTransaction,
        ...newTransactions,
      ]);

      console.log(newTransactions, 'SOY TRANSACTION'); // Muestra las nuevas transacciones

      try {
        // Realizamos la solicitud con axios
        axios
          .post('http://localhost:8781/transaction', newTransactions)
          .then(res => {
            const data = res.data;
            console.log(data, 'SOY DATA');
          });
      } catch (error) {
        console.error(error, 'Error en la solicitud');
      }
    };

    postTransaction();
    redirectHome();
  };

  const redirectHome = () => {
    navigate('/home');
  };

  useEffect(() => {
    const newTotal = dataContext.productos.reduce(
      (acc, producto) => acc + producto.price,
      0,
    );
    setTotal(newTotal);
  }, [dataContext.productos]);

  return (
    <>
      <div className="container">
        {dataContext.productos.length > 0 ? (
          <ul>
            {dataContext.productos.map(producto => {
              return (
                <>
                  <div
                    key={producto.idMovie}
                    className="row d-flex  container-principal  "
                  >
                    <div className="col-2 container_img">
                      <div className="w-100 container_img">
                        <img className="img-car" src={producto.urlImg} alt="" />
                      </div>
                    </div>
                    <div className="col-5 container-li">
                      <div className="row">
                        <div className="col-12">
                          <label className="title" key={producto.idMovie}>
                            {producto.title}
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-6 d-flex align-items-center">
                          <label key={producto.idMovie}>
                            {producto.durationMovie}
                          </label>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                          <label key={producto.idMovie}>
                            {producto.category}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <div
                        onClick={() => eliminarProducto(producto.idMovie)}
                        className="container_btn"
                      >
                        <RiDeleteBin5Line className="delete btn  nav-item " />
                      </div>
                    </div>
                    <div className="col-2 d-flex justify-content-center align-items-center">
                      <span className="costo">$ {producto.price}</span>
                    </div>
                  </div>
                </>
              );
            })}
            <div key={2000} className="row d-flex justify-content-center   ">
              <div className="costo col-6 text-center">Total: $ {total}</div>
              <div className="col-3 d-flex justify-content-end">
                <div className="d-flex justify-content-center align-items-center">
                  {' '}
                  <label className="textPay text-center">
                    Proceder a pagar
                  </label>
                </div>
                <img
                  className="credit mx-1  "
                  src="/img/tarjeta-de-credito.png"
                  alt="credit"
                  onClick={pay}
                />{' '}
                <img
                  id="miImagen"
                  className="paypal mx-1  "
                  alt="paypal"
                  src="/img/paypal.png"
                  onClick={pay}
                />{' '}
              </div>
            </div>
          </ul>
        ) : (
          <>
            <div class="container empty-cart">
              <img src="/img/carro-vacio.png" alt="Carrito vacío" />
              <h1>Tu carrito está vacío</h1>
              <p>¡Parece que no has agregado nada a tu carrito aún!</p>
              <button
                onClick={redirectHome}
                className="btn btn-outline-danger  mb-3"
              >
                Empezar
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CarShop;
