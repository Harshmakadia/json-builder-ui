// Importing Modules, Components and functions
import React, { Component } from 'react';
import { Container, Grid, Message, Divider } from 'semantic-ui-react';

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
      <Container>
        <Message
            header='JSON Builder UI'
            content='Start filing in the details below to get the JSON format of the details entered'
        />
        <Divider />
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <p>Enter the values here</p>
            </Grid.Column>
            <Grid.Column width={8}>
              <p> Check the preview here</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Home;
