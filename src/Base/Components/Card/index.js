import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Card = ({ item }) => (
  <div className="card">
    <div className="card-content">
      <div className="card-cover" />
      <div className="card-info">
        <h2>{item.title}</h2>
        <h3>{item.region}</h3>
        <h4>${item.cost}</h4>
      </div>
    </div>
    <div className={`card-tag color-${item.region}`} />
    <div className={`card-tasting-notes color-${item.region}`}>
      {item.tasting_notes.map((note, index) => (
        <p key={`${note}-${index}`}>{ note }</p>
      ))}
    </div>
    <div className="card-image">
      <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt="" />
    </div>
  </div>
);

Card.propTypes = {
  item: PropTypes.object,
}

export default Card;
