import "./education.scss";
import React, { useState } from "react";
import { courses } from "./coursework_data";

const gpa = 3.8;
export default function Education() {
  const [showCourses, setShowCourses] = useState(false);
  const toggleCourses = () => setShowCourses(!showCourses);
  const [expandedCourse, setExpandedCourse] = useState(null);

  const toggleCourse = (id) => {
    if (expandedCourse === id) {
      setExpandedCourse(null); // Collapse if the same course is clicked again
    } else {
      setExpandedCourse(id); // Expand the clicked course
    }
  };

  return (
    
    <div className="education" id="education">
      <div className="left_panel col-md-5 p-2">
        <div className="left-panel-content row p-4">
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/krishpandyaportfolio.appspot.com/o/assets%2Fumd_logo.svg?alt=media"></img>
          </div>
          <div className="degree_text">
            <div className="degree-title">Bachelor's Of Science</div>
            <div className="degree-major">Major in Computer Science</div>
            <div className="degree-minor">Minor in Business Analytics</div>
            <div className="degree-year">2020 - 2024</div>
            <div className="gpa">GPA: {gpa}</div>
          </div>
          <div>
            <a
              href="https://drive.google.com/file/d/1UZbityTpj43OY-1QL4TpIPhQeTZ2RdRo/view?usp=sharing"
              target="_blank"
              className="download-button"
            >
              Download Transcript
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-7 coursework_section">
        <div className="p-2">
          <button className="expand-button" onClick={toggleCourses}>
            {showCourses ? "Hide Courses" : "Expand All"}
          </button>
        </div>

        <div className={"coursework-list " + (showCourses && " active")}>
          {courses.map((course) => (
            <div
              key={course.id}
              className="course"
              onClick={() => toggleCourse(course.id)}
            >
              {course.name}
              {expandedCourse === course.id && (
                <div>
                  <div className="tags">
                    {course.tags.map(function (tag) {
                      return (
                        <div className="tag">
                          <img src={tag} alt="" />
                        </div>
                      );
                    })}
                  </div>
                  <div className="course-details mt-1">{course.details}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
