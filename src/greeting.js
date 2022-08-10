import React, { useEffect } from "react";
import PropTypes from "prop-types";

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';

function getGreeting() {
  return (dispatch) => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch('http://127.0.0.1:3001/v1/greetings')
      .then((response) => response.json())
      .then((json) => {
        dispatch(getGreetingsSuccess(json));
      })
      .catch((error) => console.log(error));
  };
}

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    payload: json,
  };
}

class Greeting extends React.Component {
  render () {
    console.log(`this is ${this.props.greetings}`)
    return (
      <React.Fragment>
        Greeting: {this.props.greetings}
        <button className="getGreetingsBtn" onClick={() => this.props.getGreeting()}>Get Greeting</button>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreeting };

Greeting.propTypes = {
  greetings: PropTypes.string,
};

export default connect(structuredSelector, mapDispatchToProps)(Greeting);