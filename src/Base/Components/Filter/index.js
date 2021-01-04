import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Filter = ({ filters, selectedFilter, chooseFilter }) => (
  <nav className="filter">
    {filters.map((filter, index) => (
      <span
        key={`${filter}-${index}`}
        className={selectedFilter === filter ? 'selected': ''}
        onClick={chooseFilter}
      >
        {filter}
      </span>
    ))}
  </nav>
);

Filter.propTypes = {
  filters: PropTypes.array,
  selectedFilter: PropTypes.string,
  chooseFilter: PropTypes.func,
}

export default Filter;
