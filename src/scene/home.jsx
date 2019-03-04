// Importing Modules, Components and functions
import React, { Component } from 'react';
import {
  Container, Grid, Message, Divider, Form, Button, Icon, Item,
} from 'semantic-ui-react';

// Importing CSS files
import './home.css';
import CardPreview from '../components/card_preview/card_preview';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      allCards: [],
      cardDetails: {
        image: 'https://user-images.githubusercontent.com/13532530/53729055-2fd6c200-3e9a-11e9-9a7f-0e68c7ca7595.png',
        title: 'Title',
        action: 'http://www.wotnot.io',
        options: [],
        subtitle: ['subtitle'],
      },
      showOptionInfo: false,
    };
    this.updateDetails = this.updateDetails.bind(this);
    this.toggleButton = this.toggleButton.bind(this);
    this.updateOptions = this.updateOptions.bind(this);
    this.updateSubTitle = this.updateSubTitle.bind(this);
    this.addSubTitle = this.addSubTitle.bind(this);
    this.addCard = this.addCard.bind(this);
    this.loadCard = this.loadCard.bind(this);
  }

  componentDidMount() {
    // Initial Setup here
  }

  // Update any card detials
  updateDetails(event) {
    const { cardDetails } = this.state;
    cardDetails[event.target.name] = event.target.value;
    this.setState({ cardDetails });
  }

  // toogleButton for options
  toggleButton() {
    const { cardDetails } = this.state;
    const OptionObject = {
      text: 'Option N',
      next_dialog: 'N',
    };
    const { options } = cardDetails;
    options.push(OptionObject);
    this.setState({ showOptionInfo: true, cardDetails });
  }

  // Removing options from card view
  removeOption(index) {
    const { cardDetails } = this.state;
    const { options } = cardDetails;
    options.splice(index, 1);
    this.setState({ cardDetails });
  }

  // Update option in card view
  updateOptions(index, event) {
    const { cardDetails } = this.state;
    const { options } = cardDetails;
    options[index][event.target.name] = event.target.value;
    this.setState({ cardDetails });
  }

  // Update subtitle in card view
  updateSubTitle(index, event) {
    const { cardDetails } = this.state;
    const { subtitle } = cardDetails;
    subtitle[index] = event.target.value;
    this.setState({ cardDetails });
  }

  // Add new subtitle in card view
  addSubTitle() {
    const { cardDetails } = this.state;
    const { subtitle } = cardDetails;
    subtitle.push('New Subtitle');
    this.setState({ cardDetails });
  }

  // Remove subtitle from card view
  removeSubTitle(index) {
    const { cardDetails } = this.state;
    const { subtitle } = cardDetails;
    subtitle.splice(index, 1);
    this.setState({ cardDetails });
  }

  // Adding new card
  addCard() {
    const { cardDetails, allCards } = this.state;
    allCards.push(cardDetails);
    const newBlankCard = {
      image: '',
      title: '',
      action: '',
      options: [],
      subtitle: [],
    };
    this.setState({ allCards, cardDetails: newBlankCard });
  }

  // Loading card in editor
  loadCard(index) {
    let { cardDetails } = this.state;
    const { allCards } = this.state;
    cardDetails = allCards[index];
    this.setState({ cardDetails });
  }

  render() {
    const { cardDetails, showOptionInfo, allCards } = this.state;
    const { options, subtitle } = cardDetails;

    // Rendering Options
    const OptionItems = options.map((option, index) => (
      <Form.Field key={index}>
        <label>
            Option Info
          {' '}
          {index + 1}
          <Icon name="close" onClick={() => this.removeOption({ index })} />
        </label>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Text"
            name="text"
            placeholder="text"
            value={option.text}
            onChange={e => this.updateOptions(index, e)}
          />
          <Form.Input
            fluid
            label="Next Dialog"
            name="next_dialog"
            placeholder="next step"
            value={option.next_dialog}
            onChange={e => this.updateOptions(index, e)}
          />
        </Form.Group>
      </Form.Field>
    ));

    // Rendering Options
    const SubtitleItems = subtitle.map((text, index) => (
      <Form.Group key={index}>
        <Form.Input
          className="custom-subtitle"
          fluid
          name="subtitle"
          placeholder="subtitle"
          value={text}
          onChange={e => this.updateSubTitle(index, e)}
        />
        <Icon name="close" onClick={() => this.removeSubTitle({ index })} />

      </Form.Group>
    ));

    const cards = allCards.map((card, index) => (
      <Item key={index} onClick={() => this.loadCard(index)}>
        <Item.Image size="tiny" src={card.image} />
        <Item.Content verticalAlign="middle">{card.title}</Item.Content>
      </Item>
    ));

    return (
      <Container fluid>
        <Message
          header="JSON Builder UI"
          content="Start filing in the details below to get the JSON format of the details entered"
        />
        <Divider />
        <Grid>
          <Grid.Row>
            <Grid.Column width={3}>
              <Item.Group divided>
                {cards}
              </Item.Group>
            </Grid.Column>
            <Grid.Column width={9}>
              <div className="form-preview">
                <Form>
                  <Form.Field>
                    <label htmlFor="image">Image URL</label>
                    <input placeholder="url" name="image" onChange={this.updateDetails} />
                  </Form.Field>

                  <Form.Field>
                    <label>Title</label>
                    <input placeholder="title" name="title" onChange={this.updateDetails} />
                  </Form.Field>

                  <Form.Field>
                    <label>
                      Subtitle
                      <Icon name="add" onClick={() => this.addSubTitle()} />
                    </label>
                    {SubtitleItems}
                  </Form.Field>

                  <Form.Field>
                    <label>Action</label>
                    <input placeholder="action" name="action" onChange={this.updateDetails} />
                  </Form.Field>

                  <Button onClick={this.toggleButton}>Add Options</Button>

                  <Divider />

                  {showOptionInfo
                  && (
                  <Form.Field>
                    {OptionItems}
                  </Form.Field>

                  )
                  }
                  <Button fluid color="green" onClick={this.addCard}>Add Card</Button>
                </Form>
              </div>
            </Grid.Column>
            <Grid.Column width={4}>
              <CardPreview cardDetails={cardDetails} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Home;
