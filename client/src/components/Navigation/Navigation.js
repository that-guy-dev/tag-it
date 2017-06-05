import React, { Component } from 'react';

class Navigation extends Component {
  componentWillMount = () => {

  }
  render() {
    return (
      <div className="nav">
        <img src="../../assets/img/logo.png" alt=""/>
        <div className="tags">
          <li>Relay</li>
        </div>
      </div>
    );
  }
}

export default Navigation;



/*import React, { Component } from 'react';

const Navigation = (props) => { 
  return ( 
     <div className="nav">
        <img src="../../assets/img/logo.png" alt=""/>
        <div className="tags">
          <li>Relay</li>
        </div>
      </div>  ); 
};

export default Navigation;*/
