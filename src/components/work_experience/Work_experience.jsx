import "./work_experience.scss";
import React, { Component } from "react";
import JobCard from "../JobCard/JobCard";
export default function WorkExperience(props) {
  const jobs = [
    {
      title: "Software Developer",
      company: "Company A",
      year: "2020 - Present",
      description:
        "Developed numerous software solutions, improving client processes and interaction.",
    },
    {
      title: "1 Junior Developer",
      company: "Company B",
      year: "2018 - 2020",
      description:
        "Assisted in the development of web applications and performed bug fixes.",
    },
    ,
    {
      title: "2 Junior Developer",
      company: "Company B",
      year: "2018 - 2020",
      description:
        "Assisted in the development of web applications and performed bug fixes.",
    },
    ,
    {
      title: "3 Junior Developer",
      company: "Company B",
      year: "2018 - 2020",
      description:
        "Assisted in the development of web applications and performed bug fixes.",
    },
    // Add more job entries as needed
  ];

  return (
    <div className="timeline-container">
      {jobs.map((job, index) => (
        <div className="timeline-entry" style={{ position: "relative" }}>
          <h2>{job.title}</h2>
          <h3>{job.company}</h3>
          <p>{job.year}</p>
          <p>{job.description}</p>
          {/* You can add icons or labels here */}
        </div>
      ))}
    </div>
  );
}
