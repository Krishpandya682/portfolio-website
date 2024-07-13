import "./work_experience.scss";
import React, { Component } from "react";
import Marquee from "react-fast-marquee";
import { jobs } from "./work_data";

export default function WorkExperience(props) {
  return (
    <div id="work_experience" className="timeline-container">
      {jobs.map((job, index) => (
        <div className="timeline-entry" style={{ position: "relative" }}>
          <div className="job-card">
            <div className="top">
              <div className="icon">
                <img src={"https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2F" + job.icon + "?alt=media"} alt={job.company + "_logo"} loading="lazy"/>
              </div>

              <p className="year">{job.year}</p>
              <h2 className="job-title">{job.title}</h2>
              <h4 className="company-name">{job.company}</h4>
            </div>
            <div className="bottom">
              <div className="skills-list">
                <Marquee
                  loop={0}
                  speed={50}
                  pauseOnClick={true}
                  gradient={true}
                  gradientWidth={100}
                  direction={index % 2 === 0 ? "left" : "right"} // Alternating direction
                >
                  <div className="tags">
                    {job.skills.map((tag, tagIndex) => (
                      <div className="tag" key={tagIndex}>
                        <img src={tag} alt="" loading="lazy"/>
                      </div>
                    ))}
                  </div>
                </Marquee>
              </div>

              <div className="description row">
                {job.bullets.map((bullet, bulletIndex) => (
                  <div className="description-item" key={bulletIndex}>
                    <div className="description-text-top">{bullet.top}</div>
                    <div className="description-text-number">
                      {bullet.number}
                    </div>
                    <div className="description-text-bottom">
                      {bullet.bottom}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
