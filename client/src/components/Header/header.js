import React, { Component } from 'react';

class Header extends Component {
  componentWillMount = () => {
    // const { dispatch } = this.props;
    // dispatch(fetchTags());
  }
  render() {
    return (      
      <div className="header">
          <h3>Good morning Úlli</h3>
          <span>let's start exploring</span>
      </div>
    );
  }
}

export default Header;