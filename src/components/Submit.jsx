import React from 'react';
import PropTypes from 'prop-types';

const Submit = ({ query, handleChange, onSubmit }) => (
  <form onSubmit={onSubmit}>
    <label htmlFor="author">Search Articles:
      <input id="query" type="text" aria-label="search-bar" value={query} onChange={handleChange}></input>
    </label>
    <button aria-label="filter-stories">Submit</button>
  </form>
);

Submit.propTypes = {
  query: PropTypes.string,
  handleChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Submit;
