import React from 'react';
import './certifications.scss';
import {certificates} from './certificates_data';

const Certificates = ({ images }) => {
  return (
    <div className="gallery">
      {certificates.map((image, index) => (
        <a key={index} href={image.href} target="_blank" rel="noopener noreferrer" className="gallery-item">
          <img src={image.src} alt={`Certificate ${index}`} />
        </a>
      ))}
    </div>
  );
};

export default Certificates;
