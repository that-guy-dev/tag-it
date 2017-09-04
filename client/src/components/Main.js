import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Articles from './Articles/Articles';
import Tags from './Navigation/Navigation';

class Main extends Component {
    render() {
        return ( 
            <div className="container">
                <Tags />
                <Articles />
            </div>            
        );
    }
}

export default connect()(Main);