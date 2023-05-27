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