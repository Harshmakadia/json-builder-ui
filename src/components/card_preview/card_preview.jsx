import React from 'react';
import {
  Container, Card, Icon, Image, Button, List,
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

function CardPreview(props) {
  const { cardDetails } = props;

  const options = cardDetails.options.map((option, index) => (
    <div key={index}>
      <Button fluid primary>{option.text}</Button>
      {' '}
      <br />
      {' '}

    </div>
  ));

  const subtitle = cardDetails.subtitle.map((sub, index) => (
    <List.Item as="li" key={index}>{sub}</List.Item>

  ));

  return (
    <Container>
      <Card>
        <Image src={cardDetails.image} />
        <Card.Content>
          <Card.Header>{cardDetails.title}</Card.Header>
          <Card.Description>
            {' '}
            <List as='ul'>
            {subtitle}
            </List>
            {' '}
            <br />
            { options }
          </Card.Description>

        </Card.Content>
        <Card.Content extra>
          <a href={cardDetails.action} target="_blank" rel="noopener noreferrer">
            <Icon name="external alternate" />
                    Action Link
          </a>
        </Card.Content>
      </Card>

    </Container>
  );
}

CardPreview.propTypes = {
  cardDetails: PropTypes.oneOfType([PropTypes.string, PropTypes.bool, PropTypes.object, PropTypes.array]),
};

CardPreview.defaultProps = {
  cardDetails: {},
};


export default CardPreview;
