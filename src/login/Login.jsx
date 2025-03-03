import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useSweetalert } from '../components/hooks/useSweetalert';
import { contextoLord } from '../components/Contexts/ContextProviderLord';

const Login = () => {
  const keys = {
    usuario: 'oscarsy@hotmail.com',
    password: '07070707',
  };
  const [isDisabled, setIsDisabled] = useState(true);
  const [isValid, setIsValid] = useState();
  const [isValidPwd, setIsValidPwd] = useState();
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [dataContext, setDataContext] = useContext(contextoLord);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onInputChangeUser = event => {
    clearErrors();
    setUser(event.target.value);
  };

  const onInputPwd = event => {
    clearErrors();
    setPwd(event.target.value);
  };

  useEffect(() => {
    const formatoUser = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const formatoPwd = /^[a-zA-Z0-9]{8,}$/;
    const validateUser = user => {
      if (formatoUser.test(user)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    };
    const validatePwd = pwd => {
      if (formatoPwd.test(pwd)) {
        setIsValidPwd(true);
      } else {
        setIsValidPwd(false);
      }
    };

    if (user?.length > 1) {
      validateUser(user);
    }
    if (pwd?.length > 1) {
      validatePwd(pwd);
    }

    if (user.length > 0 && pwd.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  });

  const onSubmitLogin = () => {
    if (user === keys.usuario && pwd === keys.password) {
      setDataContext(prevDataContext => ({
        ...prevDataContext,

        login: {
          logged: true,
          myUser: user,
        },
      }));

      const saludo = `Bienvenido ${user}`;

      const { LordAlert } = useSweetalert(saludo, '', 'success', 'lordToast');
      LordAlert();
      navigate('/home');
    } else {
      const { LordAlert } = useSweetalert(
        'Error',
        'Credenciales invalidas !',
        'error',
        'lordModal',
      );
      LordAlert();
    }
  };

  const noEnter = event => {
    if (event.keyCode == 13) {
      event.preventDefault();
    }
  };

  return (
    <>
      <div className="h-100 gradient-form">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-10">
              <div className="card rounded-3  ">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body text-center p-md-3 mx-md-4">
                      <img
                        className="card-body_img"
                        src="/img/lordVideos.png"
                        alt="img"
                      />

                      <div className="text-center">
                        <h4
                          className="mt-1 mb-3
                         pb-1"
                        >
                          Lord Videos
                        </h4>
                      </div>

                      <form onSubmit={handleSubmit(onSubmitLogin)}>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            value={user}
                            {...register('user', {
                              required: true,
                              pattern:
                                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            })}
                            name="user"
                            className={`form-control  ${
                              isValid ? 'is-valid' : ''
                            }`}
                            onChange={event => onInputChangeUser(event)}
                            onKeyDown={event => noEnter(event)}
                          />

                          <p className="text-danger">
                            {errors.user?.type === 'required' && (
                              <span>*Este campo es requerido</span>
                            )}
                          </p>
                          <p className="text-danger">
                            {errors.user?.type === 'pattern' && (
                              <span>*Formato invalido de correo</span>
                            )}
                          </p>
                          <label
                            className="form-label"
                            htmlFor="form2Example11"
                          >
                            Usuario
                          </label>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="password"
                            id="htmlForm2Example22"
                            value={pwd}
                            {...register('pwd', { required: true })}
                            {...register('pwd', {
                              required: true,
                              pattern: /^[a-zA-Z0-9]{8,}$/,
                            })}
                            name="pwd"
                            className={`form-control  ${
                              isValidPwd ? 'is-valid' : ''
                            }`}
                            onChange={event => onInputPwd(event)}
                            onKeyDown={event => noEnter(event)}
                          />
                          <p className="text-danger">
                            {errors.pwd?.type === 'required' && (
                              <span>*Este campo es requerido</span>
                            )}
                          </p>
                          <p className="text-danger">
                            {errors.pwd?.type === 'pattern' && (
                              <span>*Se requieren mínimo 8 caracteres</span>
                            )}
                          </p>

                          <label
                            className="form-label"
                            htmlFor="form2Example22"
                          >
                            Contraseña
                          </label>
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className={`btn btn-outline-danger  mb-3 ${
                              isDisabled ? 'btn-disabled' : ''
                            }`}
                            type="submit"
                          >
                            Ingresar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4 ">
                      <h4 className="mb-4 text-center">
                        ¡Bienvenido a Lord Videos! <br /> Tu Pasaporte al Mundo
                        del Cine!
                      </h4>
                      <p className="small mb-0 text-justify">
                        En Lord Videos, transformamos la forma en que disfrutas
                        del cine. Aquí encontrarás un catálogo vibrante y
                        diverso de películas para comprar y rentar, desde los
                        últimos estrenos hasta esos clásicos que nunca pasan de
                        moda. Ya sea que busques una emocionante aventura, una
                        comedia que te haga reír a carcajadas o un drama que te
                        haga reflexionar, nosotros tenemos lo que necesitas.
                        Navega por nuestras categorías, descubre nuevos títulos
                        y prepárate para una maratón de cine como nunca antes.
                        ¡Dale vida a tus noches de película con Lord Videos y
                        conviértete en el rey del entretenimiento!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
