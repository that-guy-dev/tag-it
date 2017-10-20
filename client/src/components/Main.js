import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Articles from './Articles/Articles';
import Tags from './Navigation/Navigation';
import Header from './Header/Header';

class Main extends Component {

    render() {
        return (
            <div>                           
                <div className="container">                                    
                    <Tags />
                    <div className="content">
                        <Header />                    
                        <Articles />
                    </div>
                </div>            
            </div>
        );
    }
}

export default connect()(Main);