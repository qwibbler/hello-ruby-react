import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useSelector } from 'react-redux';

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';

function getThings() {
  console.log('ACTION: getThings');
  return {
    type: GET_THINGS_REQUEST,
  };
}
class HelloWorld extends React.Component {
  render() {
    const { things } = this.props;
    console.log('things', things);
    this.props.getThings();
    const { thingsList } = things == undefined ? null : things.map((thing) => {
      return <li> {thing.name} {thing.id} </li>
    });
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getThings" onClick={this.props.getThings}>
          Get Things
        </button>
        <br />
        <p>{ thingsList }</p>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string,
};

const structuredSelector = createStructuredSelector({
  things: (state) => state.things,
});

const mapDispatchToProps = { getThings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
