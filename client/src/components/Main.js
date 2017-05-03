import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Articles from './Articles/Articles';

class Main extends Component {
    render() {
        return ( <Articles />
        );
    }
}

export default connect()(Main);