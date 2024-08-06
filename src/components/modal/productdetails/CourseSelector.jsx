// src/components/CourseSelector.js
import React from 'react';

const CourseSelector = ({ courses, selectedCourse, onCourseSelect }) => {
  return (
    <div className="course-selector">
      <h4>Select Course:</h4>
      <select
        value={selectedCourse ? selectedCourse.id : ''}
        onChange={(e) => {
          const selectedId = parseInt(e.target.value);
          const selected = courses.find(course => course.id === selectedId);
          onCourseSelect(selected);
        }}
      >
        <option value="">Select a course</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.courseName}
          </option>
        ))}
      </select>
      
    </div>
  );
};

export default CourseSelector;
