import "./education.scss";
import React, { useState } from "react";
export default function Education() {
  const [showCourses, setShowCourses] = useState(false);
  const toggleCourses = () => setShowCourses(!showCourses);
  const [expandedCourse, setExpandedCourse] = useState(null);

  const gpa = 3.8;
  const courses = [
    {
      id: "cns",
      name: "Computer and Network Security",
      details:
        "Learn about securing computer networks and handling cybersecurity threats.",
    },
    {
      id: "ads",
      name: "Advanced Data Structures",
      details:
        "Explore complex data structures and algorithms for optimizing data storage and retrieval.",
    },
    // Add more courses with similar structure
  ];

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
            <img src="./assets/umd_logo.svg"></img>
          </div>
          <div className="degree_text">
            <h1>Bachelor's Of Science</h1>
            <h1>Major in Computer Science</h1>
            <h2>Minor in Business Analytics</h2>
            <h1>2020 - 2024</h1>
            <h1 className="gpa">GPA: 3.8</h1>
          </div>
          <div>
            <button
              href="/path/to/your/transcript.pdf"
              target="_blank"
              download
              className="download-button"
            >
              Download Transcript
            </button>
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
                <div className="course-details mt-1">{course.details}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
