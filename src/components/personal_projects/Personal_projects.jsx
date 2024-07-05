import React, { Component } from "react";
import "./personal_projects.scss";
import Card from "../cards/cards";
import { cardData } from "./project_data";
export default function PersonalProjects(props) {

  return (
    <div className="personal_projects" id="personal_projects">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div class="horizontal-snap">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          img1={card.img1}
          img2={card.img2}
          img3={card.img3}
          img4={card.img4}
          vid={card.vid}
          btn1={card.btn1}
          btn2={card.btn2}
          btnLink1={card.btnLink1}
          btnLink2={card.btnLink2}
          tags={card.tags}
          order={index % 2 === 0 ? "0" : "1"}
        />
      ))}
      </div>
    </div>
  );
}
