import React from 'react';
import './certifications.scss';
import {certificates} from './certificates_data';

const Certificates = ({ images }) => {
  return (
    <div id='certifications' className="gallery">
      {certificates.map((image, index) => (
        <a key={index} href={image.href} target="_blank" rel="noopener noreferrer" className="gallery-item">
          <img src={'./assets/certificates/'+image.src} alt={image.name  } />
        </a>
      ))}
    </div>
  );
};

export default Certificates;
