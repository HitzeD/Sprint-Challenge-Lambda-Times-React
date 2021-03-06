import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => {
        return <Card card={card} />
      })}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(
      PropTypes.shape({
        card: PropTypes.string
      })
  ).isRequired
}

Cards.defaultProps = {
  post: [],
};

// Make sure you include prop types for all of your incoming props

export default Cards;