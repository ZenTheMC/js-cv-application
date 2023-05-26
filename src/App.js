import React, { Component } from 'react';
import Personal from './components/personal';
import Education from './components/education';
import Experience from './components/experience';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Objects/Components and the objects inside them defined here, to show what "states" will be targets
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

    // Method that updates the state when a form field is changed
    handleChange = (section) => (event) => {
      this.setState({
        [section]: {
          ...this.state[section],
          [event.target.name]: event.target.value
        }
      });
    }

    // Called when form submits: Prevents default form submit+set submit flag to true
    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({ submitted: true });
    }

    // called when Edit button click: Submit flag to false+allow form edit
    handleEdit = () => {
      this.setState({ submitted: false });
    }

  };

  // The stuff that will be rendered on the webpage, as HTML-like items
  render() {
    const { personal, education, experience, submitted } = this.state;

    return (
      <div>
        {!submitted ? (
          <form onSubmit={this.handleSubmit}>
            <Personal data={personal} handleChange={this.handleChange('personal')} />
            <Education data={education} handleChange={this.handleChange('education')} />
            <Experience data={experience} handleChange={this.handleChange('experience')} />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <button onClick={this.handleEdit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default App