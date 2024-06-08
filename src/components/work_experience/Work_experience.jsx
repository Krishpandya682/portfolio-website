import "./work_experience.scss"
import React, { Component }  from 'react';
import JobCard from "../JobCard/JobCard";
export default function WorkExperience(props) {
    

    return (
      <div className="work_experience" id="work_experience">
        <div className="row-jcRow">
          <div className="col-md-6">
            <JobCard
              title="JOB1"
              company="Company"
              duration="duration"
              description="ssadas"
            />
          </div>
          <div className="col-md-6">
            <div className="jobCard">
              <JobCard
                title="JOB1"
                company="Company"
                duration="duration"
                description="ssadas"
              />
            </div>
          </div>
        </div>
      </div>
    );
}
