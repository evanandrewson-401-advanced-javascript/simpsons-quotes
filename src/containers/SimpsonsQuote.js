import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quote from '../components/quote/Quote';
import { connect } from 'http2';
import { getLoading, getCharacterImage, getCharacterName, getQuote } from '../selectors/quoteSelectors';

class SimpsonsQuote extends Component {
  render() {
    return <Quote quote={this.props.quote} characterName={this.props.characterName} characterImage={this.props.characterImage}  />;
  }

  static propTypes = {
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired,
    fetchQuote: PropTypes.func.isRequired
  }
}

const mapStateToProps = state => ({
  quote: getQuote(state),
  characterName: getCharacterName(state),
  characterImage: getCharacterImage(state),
  loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchQuote() {
    dispatch(newQuote());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
