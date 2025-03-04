import React from 'react';
import Card from '../../components/Card/Card';
import './Catalogo.css';
const Catalogo = ({ data, vista, isHome }) => {
  return (
    <>
      <div className="container">
        <div className="grid">
          {data.map(item => {
            return (
              <>
                {isHome == 'true' ? (
                  <Card
                    key={item.id_movie}
                    title={item.title}
                    desc={item.description}
                    iframe={item.iframe}
                    action={item.type_transaction}
                    data={item}
                    vista={vista}
                    ishome={isHome}
                  />
                ) : (
                  <Card
                    key={item.idMovie}
                    title={item.title}
                    desc={item.description}
                    iframe={item.iframe}
                    action={item.typeTransaction}
                    data={item}
                    vista={vista}
                  />
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Catalogo;
