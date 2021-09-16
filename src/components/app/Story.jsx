import React from 'react';
import PropTypes from 'prop-types';

const Story = ({ author, title, description }) => (
  <>
    <h2>{title}</h2>
    <h4>{author}</h4>
    <h3>{description}</h3>
  </>
);

Story.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Story;
