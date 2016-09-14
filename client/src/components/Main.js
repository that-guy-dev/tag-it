import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { tagArticle } from '../actions/articles';

class Main extends Component {

  tag = () => {
    const { dispatch } = this.props;
    const url = this.refs.url.value;
    console.log(url);
    dispatch(tagArticle(url));
  }

  render() {
    return (
      <div>
        <h2>Tag it</h2>
        <div>
          Url: <input type="text" name="url" ref="url" />
          <button onClick={e => this.tag(e)}>TAG</button>
        </div>
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Main);
