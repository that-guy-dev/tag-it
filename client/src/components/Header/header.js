import React, { Component } from 'react';

class Header extends Component {
  componentWillMount = () => {
    // const { dispatch } = this.props;
    // dispatch(fetchTags());
  }
  render() {
    return (      
      <div className="header">
          Good morning Úlli
      </div>
    );
  }
}

export default Header;