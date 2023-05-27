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