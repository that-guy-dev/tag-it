import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import styled from 'styled-components';
import { fetchTags } from '../../actions/tags';
import Button from '../../../styles.js';

class Tags extends Component {
  componentWillMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchTags());
  }
  render() {
    const tags = this.props.tags.map((tags, i) => ( 
      <li key={i}>{tags.tags}</li>
    ));
    return (      
      <div>
      {/* <img className="nav-action" src="../../assets/img/logo_symbol_blue.png"/>       */}
      <div className="nav">
        <div className="nav-container">
          <img src="../../assets/img/logo.png" alt=""/>
          <div className="tags">       
            <li>Favourite</li>
            <li>In progress</li>
            <li>Reminder</li>
            <li>Offline access</li>
            <li style={{marginBottom: '20px'}}>Archive</li>     
            <li>Trending</li>
            <li>Popular</li>
            <li style={{marginBottom: '20px'}}>Suggestions</li>
            { tags }
            <li>+</li>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

Tags.propTypes = {
  // tags: PropTypes.array.isRequired,
  // dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
      tags: state.tags.items,
  };
}

export default connect(mapStateToProps)(Tags);