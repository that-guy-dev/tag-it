import React, { Component } from 'react';
import styled from 'styled-components';
import * as g from '../../../css/styles.js'
const ContentHeader = g.ContentHeader;

const Headline = styled.div`
  color:red;
  grid-column: 2 / -1;
  grid-row: 2 / 5;   
`;

class Header extends Component {
  componentWillMount = () => {
    // const { dispatch } = this.props;
    // dispatch(fetchTags());
  }
  render() {
    return (      
      <ContentHeader>
        <Headline>Good morning Úlli</Headline>
        <span>let's start reading and exploring</span>
      </ContentHeader>

    );
  }
}

export default Header;