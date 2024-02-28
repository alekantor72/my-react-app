import React from 'react';

const Pantalones = () => {
  const pantalones = [
    {
      id: 1,
      imagen: '/imagen rani.png',
      precio: 29.99,
      talles: ['S', 'M', 'L', 'XL'],
    },
   
  ];

  return (
    <div>
      {pantalones.map((pantalon) => (
        <div key={pantalon.id}>
          <img src={pantalon.imagen} alt="Pantalón" />
          <p>Precio: ${pantalon.precio}</p>
          <p>Talles disponibles: {pantalon.talles.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default Pantalones;