import React, { Component, PropTypes } from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import {
  Route,
  Router,
  IndexRoute,
  browserHistory,
} from 'react-router';
import moment from 'moment';
import App from './src/containers/App';
import Main from './src/components/Main';
import Article from './src/components/Article/Article';
import Login from './src/components/Account/Login';

class Routes extends Component {

  authenticate = (nextState, replace) => {     
    if (!(sessionStorage.token && (moment() < moment(sessionStorage.expires)))) {             
      replace({ pathname: '/login', state: { nextPathname: nextState.location.pathname } });
    }
  }

  render() {
    const history = syncHistoryWithStore(browserHistory, this.props.store);
    // taken from https://github.com/reactjs/react-router/issues/2144#issuecomment-150939358
    history.listen(location => {
      // Use setTimeout to make sure this runs after React Router's own listener
      setTimeout(() => {
        // Keep default behavior of restoring scroll position when user:
        // - clicked back button
        // - clicked on a link that programmatically calls `history.goBack()`
        // - manually changed the URL in the address bar (here we might want
        // to scroll to top, but we can't differentiate it from the others)
        if (location.action === 'POP') {
          return;
        }
        // In all other cases, check fragment/scroll to top
        const hash = window.location.hash;
        if (hash) {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ block: 'start', behavior: 'smooth' });
          }
        } else {
          window.scrollTo(0, 0);
        }
      });
    });

    return (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Main} onEnter={this.authenticate} />
          <Route path="/login" component={Login} />
          <Route path="/article/:id" component={Article} onEnter={this.authenticate} />
        </Route>
      </Router>
    );
  }
}

Routes.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Routes;
