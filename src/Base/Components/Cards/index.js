import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Cards = ({ children }) => (
  <div className="cards">{children}</div>
);

Cards.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
};

export default Cards;
