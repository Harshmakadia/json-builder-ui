// Importing Modules, Components and functions
import React, { Component } from 'react';

// Importing CSS files
import './home.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
   // Initial Setup here
  }


  render() {
    return (
      <div className="container-fluid">
        Welcome to JSON Builder
      </div>
    );
  }
}

export default Home;
