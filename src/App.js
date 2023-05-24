import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Components that are technically objects need to be defined here
    };

    // Methods that include next line as a direct child
    this.setState(state => ({
      // The previously defined component objects implemented logic(if/then, etc)
    }));

    // Methods that include next line as a direct child
    this.setState(state => ({
      // The previously defined component objects implemented logic(if/then, etc)
    }));

    // Methods that include next line as a direct child
    this.setState(state => ({
      // The previously defined component objects implemented logic(if/then, etc)
    }));
  };

  // The stuff that will be rendered on the webpage, as HTML-like items
  render() {
    const { /* Component objects at start list for deconstruction*/ } = this.state;

    return (
      <div>
        CV App
      </div>
    );
  };
}

export default App