import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Articles from './Articles';

class Main extends Component {

  render() {

    return (
      <div>
        <h2>Tag it</h2>
        <div>
          <Articles />
        </div>
      </div>
    );
  }
}

export default connect()(Main);
