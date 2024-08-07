import React, { useState, useEffect, useRef } from "react";
import "./personal_projects.scss";
import Card from "../cards/cards";
import { cardData } from "./project_data";

export default function PersonalProjects(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const newIndex = Math.min(Math.round(scrollLeft / clientWidth), cardData.length - 1);
      setCurrentIndex(newIndex);
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("scroll", handleScroll);

    // Initial check to set the index correctly on mount
    handleScroll();

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="personal_projects" id="personal_projects">
      <div className="title">
        <h1>Projects</h1>
      </div>
      <div className="horizontal-snap" ref={scrollContainerRef}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            img1={card.img1}
            img2={card.img2}
            img3={card.img3}
            img4={card.img4}
            images={card.images}
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
      <div className="progress-bar">
        {cardData.map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${currentIndex === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
