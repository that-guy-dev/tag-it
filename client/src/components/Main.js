import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Articles from './Articles/Articles';
import Nav from './Navigation/Navigation';


class Main extends Component {
    render() {
        return ( 
            <div className="container">
                <Nav />
                <Articles className="articles" />
            </div>            
        );
    }
}

export default connect()(Main);