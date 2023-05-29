//--------------------------------------------------------------------------------------//

// Class Components Structure
/*
import React from "react";

const Personal = ({ data, handleChange }) => (
// Return Name, Email, Phone Number
    <div>
        <h2>General Information</h2>
            <input name="name" value={data.name} onChange={handleChange} placeholder="Name" />
            <input name="email" value={data.email} onChange={handleChange} placeholder="Email" />
            <input name="phoneNumber" value={data.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
    </div>
);

export default Personal;
*/
// Class Components Structure

//--------------------------------------------------------------------------------------//

// Functional Components Structure
import React from 'react';

const Personal = ({ personal, handleChange }) => {
  return (
    <div className='cv-form'>
      <h1>Personal Information</h1>
      <input type="text" name="name" value={personal.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="email" value={personal.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="phone" value={personal.phone} onChange={handleChange} placeholder="Phone" />
    </div>
  );
};

export default Personal;
// Functional Components Structure

//--------------------------------------------------------------------------------------//