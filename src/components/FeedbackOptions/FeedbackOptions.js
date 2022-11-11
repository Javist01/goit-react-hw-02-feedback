import React from 'react';
import PropTypes from 'prop-types';
import { ListOfButtons, Item, Button } from './FeedbackOptions.styled';

export function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <>
      <ListOfButtons>
        <Item>
          <Button value="good" onClick={e => onLeaveFeedback(e)}>
            Good
          </Button>
        </Item>
        <Item>
          <Button value="neutral" onClick={e => onLeaveFeedback(e)}>
            Neutral
          </Button>
        </Item>
        <Item>
          <Button value="bad" onClick={e => onLeaveFeedback(e)}>
            Bad
          </Button>
        </Item>
      </ListOfButtons>
    </>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};