import React from "react";
import "./certifications.scss";
import { certificates } from "./certificates_data";

const Certificates = ({ images }) => {
  return (
    <div id="certifications" className="certifications">
      <div className="title">
        <h1>Certificates</h1>
      </div>
      <div className="gallery">
        {certificates.map((image, index) => (
          <a
            key={index}
            href={image.href}
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-item"
          >
            <img src={"https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2Fcertificates%2F" + image.src + "?alt=media"} alt={image.name} loading="lazy"/>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
