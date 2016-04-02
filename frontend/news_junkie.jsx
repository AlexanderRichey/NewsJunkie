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
    EditFeedForm = require('./components/edit_feed_form');

var Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="add_category" component={CategoryForm} />
    <Route path="edit_category/:id" component={EditCategoryForm} />
    <Route path="add_feed" component={FeedForm} />
    <Route path="edit_feed/:feed_id/:category_id" component={EditFeedForm} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router history={hashHistory}>{Routes}</Router>,
    document.getElementById('main')
  );
});
