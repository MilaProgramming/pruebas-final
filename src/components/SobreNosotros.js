import React from 'react';
import '../styles/SobreNosotros.css'; // Estilos CSS para este componente
import foto from '../assets/persona.jpg'; // Ruta de la imagen

const SobreNosotros = () => {
    return (
    <div className="contenedor-sn">
       <div className='sn-imagen'>
        <img src={foto} alt="Background" className="background-image" />
       </div>
       <p className='texto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet arcu non velit fermentum malesuada.
          Mauris luctus ligula sed lectus fringilla, sed dignissim dolor eleifend. Sed eget neque in mi posuere luctus.
          Nullam nec nulla vitae lorem cursus sagittis. Duis fermentum hendrerit sapien, id mattis libero pellentesque et.
          Suspendisse potenti. Morbi sit amet tristique lorem. Nullam nec mi nec nisi ultricies euismod. Maecenas rhoncus
          velit nisi, at commodo nisi aliquet a. Donec convallis ultricies odio, at facilisis magna lobortis in.
        </p>
    </div>
  );
}

export default SobreNosotros;
