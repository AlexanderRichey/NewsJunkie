var React = require('react'),
    ReactDOM = require('react-dom');

var Router = require('react-router').Router,
    Route = require('react-router').Route,
    IndexRoute = require('react-router').IndexRoute,
    hashHistory = require('react-router').hashHistory;

var App = require('./components/app'),
    Main = require('./components/main'),
    CategoryForm = require('./components/category_form'),
    EditCategoryForm = require('./components/edit_category_form'),
    FeedForm = require('./components/feed_form'),
    EditFeedForm = require('./components/edit_feed_form'),
    LoginForm = require('./components/login_form'),
    SignUpForm = require('./components/sign_up_form'),
    Util = require('./util/api_util'),
    SessionStore = require('./stores/sessions');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={App} onEnter={_requireLoggedIn}>
        <IndexRoute component={Main} />
        <Route path="add_category" component={CategoryForm} />
        <Route path="edit_category/:id" component={EditCategoryForm} />
        <Route path="add_feed" component={FeedForm} />
        <Route path="edit_feed/:feed_id/:category_id"
          component={EditFeedForm} />
      </Route>

      <Route path="/login" component={LoginForm} />
      <Route path="/sign_up" component={SignUpForm} />
    </Router>,
    document.getElementById('main')
  );
});

function _requireLoggedIn(nextState, replace, asyncCompletionCallback) {
  if (!SessionStore.currentUserHasBeenFetched()) {
    Util.fetchCurrentUser(_redirectIfNotLoggedIn);
  } else {
    _redirectIfNotLoggedIn();
  }

  function _redirectIfNotLoggedIn() {
    if (!SessionStore.isLoggedIn()) {
      replace("/login");
    }

    asyncCompletionCallback();
  }
};
