import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Titulo.css';

const Titulo = ({ texto }) => {
  return (
    <div className="titulo-container">
      <h1 className="titulo-texto">{texto}</h1>
    </div>
  );
}

Titulo.propTypes = {
  texto: PropTypes.string.isRequired
};

export default Titulo;
