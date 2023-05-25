import React from "react";

const Personal = (props) => {
    const {  } = props;

    // Return Name, Email, Phone #
    return (
        <div>
            <form id="personal-form">
                <label for="name">Your Name</label>
                <input type="text" id="name"/>
                <label for="email">Your Email</label>
                <input type="text" id="email"/>
                <label for="number">Your Phone Number</label>
                <input type="text" id="number"/>
                <label for="personal-button">Submit Personal Information</label>
                <button type="submit" id="personal-button">Submit</button>
            </form>
        </div>
    );
}

export default Personal;