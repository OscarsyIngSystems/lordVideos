import React from 'react';
import Card from '../../components/Card/Card';
import './Catalogo.css';
const Catalogo = ({ data, vista }) => {
  return (
    <>
      <div className="container">
        <div className="grid">
          {data.map(item => {
            return (
              <Card
                key={item.idMovie}
                title={item.title}
                desc={item.description}
                iframe={item.iframe}
                action={item.typeTransaction}
                data={item}
                vista={vista}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Catalogo;
