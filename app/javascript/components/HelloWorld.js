import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST'

function getThings() {
  console.log('ACTION: getThings')
  return {
    type: GET_THINGS_REQUEST,
  }
}
class HelloWorld extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getThings" onClick={this.props.getThings}>Get Things</button>
      </React.Fragment>
    );
  }
}

HelloWorld.propTypes = {
  greeting: PropTypes.string
};

const structuredSelector = createStructuredSelector({
  things: state => state.things,
})

const mapDispatchToProps = { getThings };

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
