import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';

const StoryList = ({ stories }) => (
    <ul aria-label="stories">
        {stories.map(({ author, title, description }) => (
            <li key={`${author}-${title}`}>
                <Story author={author} title={title} description={description} />
            </li>
        ))}
    </ul>
);

StoryList.propTypes = {
    stories: PropTypes.arrayOf(
        PropTypes.shape({
            author: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
}

export default StoryList;