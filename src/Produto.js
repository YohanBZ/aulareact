import React from 'react';

export const Produto = ({ nome, propriedades }) => {
  return (
    <div style={{ border: '1px solid', padding: '1rem', marginBottom: '1rem' }}>
      <h2>{nome}</h2>
      <ul>
        {propriedades.map((componente) => (
          <li key={componente}>{componente}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
