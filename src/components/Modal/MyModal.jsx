import React, { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { MdAddShoppingCart } from 'react-icons/md';
import './MyModal.css';
import { contextoLord } from '../Contexts/ContextProviderLord';

const MyModal = ({ customClass, data, ishome }) => {
  const [dataContext, setDataContext] = useContext(contextoLord);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addData = data => {
    setDataContext(prevDataContext => ({
      ...prevDataContext,

      productos: [...dataContext.productos, data],
    }));
  };

  return (
    <>
      {ishome == 'true' ? (
        <>
          <Button
            className={customClass}
            variant="primary"
            onClick={handleShow}
          >
            {data.type_transaction}
          </Button>

          <Modal className="modal-lg " show={show} onHide={handleClose}>
            <Modal.Header className="modal-custom ">
              <div className="modal_title">
                <img
                  className="title_img"
                  src={data.url_img}
                  alt=""
                  srcset=""
                />
                <span className="overlay-text">{data.title}</span>
              </div>
            </Modal.Header>
            <Modal.Body className="modal-custom">
              <div className="row">
                <div className="col-7">
                  <div className="text-justify"> {data.description}</div>
                </div>

                <div className="col-5 text-end">
                  <div className="mb-3">
                    <span>Director: </span> {data.director}{' '}
                  </div>
                  <div className="mb-3">
                    {' '}
                    <span>Año: </span> {data.year_movie}{' '}
                  </div>
                  <div className="mb-3">
                    <span>Duración: </span> {data.duration_movie}{' '}
                  </div>
                  <div className="mb-3">
                    <span>Categoría: </span> {data.category}{' '}
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="d-flex justify-content-center">
                  {' '}
                  {data.type_transaction == 'Comprar' ? (
                    <span className="text-orange">Compra: $&nbsp;</span>
                  ) : (
                    <span className="text-orange">
                      Renta (4 días) : $&nbsp;
                    </span>
                  )}{' '}
                  <span className="text-yellow"> {data.price} </span>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="modal-custom">
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button
                className={customClass}
                variant="primary"
                onClick={() => {
                  addData(data);
                  setShow(false);
                }}
              >
                Agregar{' '}
                <span>
                  <MdAddShoppingCart />
                </span>
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : (
        <>
          <Button
            className={customClass}
            variant="primary"
            onClick={handleShow}
          >
            {data.typeTransaction}
          </Button>

          <Modal className="modal-lg " show={show} onHide={handleClose}>
            <Modal.Header className="modal-custom ">
              <div className="modal_title">
                <img className="title_img" src={data.urlImg} alt="" srcset="" />
                <span className="overlay-text">{data.title}</span>
              </div>
            </Modal.Header>
            <Modal.Body className="modal-custom">
              <div className="row">
                <div className="col-7">
                  <div className="text-justify"> {data.description}</div>
                </div>

                <div className="col-5 text-end">
                  <div className="mb-3">
                    <span>Director: </span> {data.director}{' '}
                  </div>
                  <div className="mb-3">
                    {' '}
                    <span>Año: </span> {data.yearMovie}{' '}
                  </div>
                  <div className="mb-3">
                    <span>Duración: </span> {data.durationMovie}{' '}
                  </div>
                  <div className="mb-3">
                    <span>Categoría: </span> {data.category}{' '}
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="d-flex justify-content-center">
                  {' '}
                  {data.typeTransaction == 'Comprar' ? (
                    <span className="text-orange">Compra: $&nbsp;</span>
                  ) : (
                    <span className="text-orange">
                      Renta (4 días) : $&nbsp;
                    </span>
                  )}{' '}
                  <span className="text-yellow"> {data.price} </span>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="modal-custom">
              <Button variant="secondary" onClick={handleClose}>
                Cerrar
              </Button>
              <Button
                className={customClass}
                variant="primary"
                onClick={() => {
                  addData(data);
                  setShow(false);
                }}
              >
                Agregar{' '}
                <span>
                  <MdAddShoppingCart />
                </span>
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default MyModal;
