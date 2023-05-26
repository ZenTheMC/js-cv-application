import React from "react";

const Personal = ({ data, handleChange }) => (
// Return Name, Email, Phone #
    <div>
        <h2>General Information</h2>
            <input name="name" value={data.name} onChange={handleChange} placeholder="Name" />
            <input name="email" value={data.email} onChange={handleChange} placeholder="Email" />
            <input name="phoneNumber" value={data.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
    </div>
);

export default Personal;