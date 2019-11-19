import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote, characterImage, characterName }) => {
  return (
    <>
      <p>{quote}</p>
      <img src={characterImage} alt={characterName} />
      <p>{characterName}</p>
    </>
  );
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  characterName: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired,
};

export default Quote;
