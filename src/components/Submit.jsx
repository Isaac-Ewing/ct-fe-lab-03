import React from 'react';
import PropTypes from 'prop-types';

const Submit = ({ query, handleChange, onSubmit }) => (
    <form onSubmit={onSubmit}>
        <label htmlFor="author"></label>
        <input id="query" type="text" value={query} onChange={handleChange} />
        <button aria-label="filter-stories">Submit</button>
    </form>
);

Submit.propTypes = {
    query: PropTypes.string,
    handleChange: PropTypes.func,
    onSubmit: PropTypes.func,
};

export default Submit;