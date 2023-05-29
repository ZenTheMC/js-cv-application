//--------------------------------------------------------------------------------------//

// Class Components Structure
/*
import React from "react";

const Experience = ({ data, handleChange }) => (
// Return Company Name, Position Title, Main Tasks, Date From, Date Until
    <div>
      <h2>Practical Experience</h2>
      <input name="companyName" value={data.companyName} onChange={handleChange} placeholder="Company Name" />
      <input name="positionTitle" value={data.positionTitle} onChange={handleChange} placeholder="Position Title" />
      <input name="mainTasks" value={data.mainTasks} onChange={handleChange} placeholder="Main Tasks" />
      <input name="dateFrom" value={data.dateFrom} onChange={handleChange} placeholder="Date From" />
      <input name="dateUntil" value={data.dateUntil} onChange={handleChange} placeholder="Date Until" />
    </div>
);

export default Experience;
*/
// Class Components Structure

//--------------------------------------------------------------------------------------//

// Functional Components Structure
import React from 'react';

const Experience = ({ experience, handleChange }) => {
  return (
    <div className='cv-form'>
      <h1>Experience</h1>
      <input type="text" name="company" value={experience.company} onChange={handleChange} placeholder="Company" />
      <input type="text" name="position" value={experience.position} onChange={handleChange} placeholder="Position" />
      <input type="text" name="mainTasks" value={experience.mainTasks} onChange={handleChange} placeholder="Main Tasks" />
      <input type="date" name="startDate" value={experience.startDate} onChange={handleChange} placeholder="Start Date" />
      <input type="date" name="endDate" value={experience.endDate} onChange={handleChange} placeholder="End Date" />
    </div>
  );
};

export default Experience;
// Functional Components Structure

//--------------------------------------------------------------------------------------//