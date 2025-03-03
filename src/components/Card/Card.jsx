import React from 'react';
import './Card.css';
import MyModal from '../Modal/MyModal';

const Card = ({ title, desc, iframe, action, data, vista }) => {
  return (
    <>
      <div className="container_card">
        <div className="card  d-flex justify-content-center">
          <div className="container_iframe">
            <lite-youtube videoid={iframe}></lite-youtube>
            {/* <iframe src={iframe} title="YouTube video player"></iframe> */}
          </div>
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{desc}</p>
            <div className="d-flex justify-content-center">
              {vista != 'misPeliculas' ? (
                <MyModal customClass="link-danger" data={data} />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
