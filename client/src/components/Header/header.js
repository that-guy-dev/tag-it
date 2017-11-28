import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import { browserHistory } from 'react-router';

const styles = {
  button: {
    position: 'absolute',
    top: '12px',
    right: '12px'
  },
}

class Header extends Component {
  componentWillMount = () => {
    // const { dispatch } = this.props;
    // dispatch(fetchTags());
  }
    render() {

    const logout = () => {
      sessionStorage.clear();
      browserHistory.push('/login');
    }

    return (      
      <div className="header">
          <h3>Good morning Úlli</h3>
          <span>let's start reading and exploring</span>

          <GoogleLogout style={styles.button} buttonText="Logout" onLogoutSuccess={logout} />
      </div>
    );
  }
}

export default Header;