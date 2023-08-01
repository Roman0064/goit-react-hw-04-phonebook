import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, onChangeFilter }) => {
  const handleChange = (event) => {
    onChangeFilter(event.currentTarget.value.toLowerCase());
  };

  return (
    <input
      type="text"
      placeholder=" Search by name"
      value={filter}
      onChange={handleChange}
      className={css.input}
    />
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
