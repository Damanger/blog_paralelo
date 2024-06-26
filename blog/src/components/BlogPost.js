import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ title, content }) => {
  return (
    <article>
      <h2>{title}</h2>
      <div>
        {content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BlogPost;
