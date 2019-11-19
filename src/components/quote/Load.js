import React from 'react';
import PropTypes from 'prop-types';

const Load = ({ fetchQuote }) => {
  return <button onClick={fetchQuote} >Get New Quote</button>;
};

Load.propTypes = {
  fetchQuote: PropTypes.func.isRequired
};

export default Load;
