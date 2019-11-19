import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Quote from '../components/quote/Quote';
import { connect } from 'react-redux';
import { getLoading, getCharacterImage, getCharacterName, getQuote } from '../selectors/quoteSelectors';
import { setQuotePromise } from '../actions/quoteDataActions';
import Load from '../components/quote/Load';

class SimpsonsQuote extends Component {
  componentDidMount() {
    this.props.fetchQuote();
  }

  render() {
    if(this.props.loading) return <h1>Loading...</h1>;
    return (
      <>
        <Quote quote={this.props.quote} characterName={this.props.characterName} characterImage={this.props.characterImage}  />
        <Load fetchQuote={this.props.fetchQuote} />
      </>
    );
  }

  static propTypes = {
    quote: PropTypes.string.isRequired,
    characterName: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired,
    fetchQuote: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
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
    dispatch(setQuotePromise());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
