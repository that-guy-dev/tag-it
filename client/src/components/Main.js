import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Articles from './Articles/Articles';
import Tags from './Navigation/Navigation';
import Header from './Header/Header';
import * as g from '../../css/styles.js'

const Grid = g.Grid;
const Sidebar = g.Sidebar;
const Content = g.Content;

class Main extends Component {
    render() {
        return ( 
                <Grid>
                    <Sidebar>
                        <Tags />
                    </Sidebar>
                    <Content>
                        <Header />
                    
                    {/* <Articles /> */}
                    </Content>
                </Grid>

            
        );
    }
}

export default connect()(Main);