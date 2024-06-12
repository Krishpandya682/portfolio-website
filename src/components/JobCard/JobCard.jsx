import "./JobCard.scss"
import React, { Component }  from 'react';
export default function jobCard(props) {
    var title = props.title
    var company = props.company
    var duration = props.duration
    var description = props.description
    return (
      <div className="jobCard">
        <div className="title"><h1>{title}</h1></div><br />
        <div className="company">{company}</div><br />
        <div className="duration">{duration}</div><br />
        <div className="description">{description}</div><br />
      </div>
    );
}
