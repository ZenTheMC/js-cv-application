//--------------------------------------------------------------------------------------//

// Class Components Structure
/*
import React from "react";
import Personal from "./components/personal";
import Education from "./components/education";
import Experience from "./components/experience";
import "./styles/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        name: "",
        email: "",
        phoneNumber: ""
      },
      education: {
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: ""
      },
      experience: {
        companyName: "",
        positionTitle: "",
        mainTasks: "",
        dateFrom: "",
        dateUntil: ""
      },
      submitted: false
    };
  }

  handleChange = (section) => (event) => {
    this.setState({
      [section]: {
        ...this.state[section],
        [event.target.name]: event.target.value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  handleEdit = () => {
    this.setState({ submitted: false });
  }

render() {
  if (!this.state.submitted) {

      return (
        <form onSubmit={this.handleSubmit} className="cv-form">
          <Personal data={this.state.personal} handleChange={this.handleChange('personal')} />
          <Education data={this.state.education} handleChange={this.handleChange('education')} />
          <Experience data={this.state.experience} handleChange={this.handleChange('experience')} />
          <button type="submit">Submit</button>
        </form>
      );
    } else {
      return (
        <div className="cv-form">
          <h2>Personal Information</h2>
          <p>Name: {this.state.personal.name}</p>
          <p>Email: {this.state.personal.email}</p>
          <p>Phone: {this.state.personal.phoneNumber}</p>

          <h2>Education</h2>
          <p>School: {this.state.education.schoolName}</p>
          <p>Title of Study: {this.state.education.titleOfStudy}</p>
          <p>Date of Study: {this.state.education.dateOfStudy}</p>

          <h2>Experience</h2>
          <p>Company: {this.state.experience.companyName}</p>
          <p>Position: {this.state.experience.positionTitle}</p>
          <p>Main Tasks: {this.state.experience.mainTasks}</p>
          <p>From: {this.state.experience.dateFrom}</p>
          <p>Until: {this.state.experience.dateUntil}</p>

          <button onClick={this.handleEdit} className="edit-button">Edit</button>
        </div>
      );
    }
  }
}

export default App;
*/
// Class Components Structure

//--------------------------------------------------------------------------------------//

// Functional Components Structure
import React, { useState } from 'react';
import Personal from './components/personal';
import Education from './components/education';
import Experience from './components/experience';
import "./styles/styles.css";

const App = () => {
  const [personal, setPersonal] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ school: '', degree: '', fieldOfStudy: '', startDate: '', endDate: '' });
  const [experience, setExperience] = useState({ company: '', position: '', mainTasks: '', startDate: '', endDate: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(experience);
    if (personal.hasOwnProperty(name)) {
      setPersonal({ ...personal, [name]: value });
    } else if (education.hasOwnProperty(name)) {
      setEducation({ ...education, [name]: value });
    } else if (experience.hasOwnProperty(name)) {
      setExperience({ ...experience, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleEdit = () => {
    setSubmitted(false);
  };

  return (
    <div className="cv-form">
      {!submitted ? (
        <>
          <Personal personal={personal} handleChange={handleChange} />
          <Education education={education} handleChange={handleChange} />
          <Experience experience={experience} handleChange={handleChange} />
          <button type="submit-button" onClick={handleSubmit}>Submit</button>
        </>
      ) : (
        <>
          <h2>Personal Information</h2>
          <p>Name: {personal.name}</p>
          <p>Email: {personal.email}</p>
          <p>Phone: {personal.phone}</p>
          <h2>Education</h2>
          <p>School: {education.school}</p>
          <p>Degree: {education.degree}</p>
          <p>Field of Study: {education.fieldOfStudy}</p>
          <p>Start Date: {education.startDate}</p>
          <p>End Date: {education.endDate}</p>
          <h2>Experience</h2>
          <p>Company: {experience.company}</p>
          <p>Position: {experience.position}</p>
          <p>Main Tasks: {experience.mainTasks}</p>
          <p>Start Date: {experience.startDate}</p>
          <p>End Date: {experience.endDate}</p>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default App;
// Functional Components Structure

//--------------------------------------------------------------------------------------//