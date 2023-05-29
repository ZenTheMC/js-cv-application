//--------------------------------------------------------------------------------------//

// Class Components Structure
/*
import React from "react";

const Education = ({ data, handleChange }) => (
// Return School Name, Title of Study, Date of Study
    <div>
      <h2>Educational Experience</h2>
      <input name="schoolName" value={data.schoolName} onChange={handleChange} placeholder="School Name" />
      <input name="titleOfStudy" value={data.titleOfStudy} onChange={handleChange} placeholder="Title of Study" />
      <input name="dateOfStudy" value={data.dateOfStudy} onChange={handleChange} placeholder="Date of Study" />
    </div>
);

export default Education;
*/
// Class Components Structure

//--------------------------------------------------------------------------------------//

// Functional Components Structure
import React from 'react';

const Education = ({ education, handleChange }) => {
  return (
    <div className='cv-form'>
      <h1>Education</h1>
      <input type="text" name="school" value={education.school} onChange={handleChange} placeholder="School" />
      <input type="text" name="degree" value={education.degree} onChange={handleChange} placeholder="Degree" />
      <input type="text" name="fieldOfStudy" value={education.fieldOfStudy} onChange={handleChange} placeholder="Field of Study" />
      <input type="date" name="startDate" value={education.startDate} onChange={handleChange} placeholder="Start Date" />
      <input type="date" name="endDate" value={education.endDate} onChange={handleChange} placeholder="End Date" />
    </div>
  );
};

export default Education;
// Functional Components Structure

//--------------------------------------------------------------------------------------//